import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'cus-scroll',
  templateUrl: './cus-scroll.component.html',
  styleUrls: ['./cus-scroll.component.scss'],
  standalone: false,
})
export class CustomScrollComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollCont') scrollPar: ElementRef;
  scrollCont: HTMLElement;
  @Output() scrollEv = new EventEmitter();
  scrollThumb: HTMLElement;
  scrlH = 0;
  viewH = 0;
  thumbH = 0;
  maxScrl = 0;
  maxTop = 0;
  top = 0;
  contactY = 0;
  initPosY = 0;
  bcTop = 0;
  constTop = 0;
  dragging = false;
  @Input() scrlListner;
  lisSub;

  initScrlH;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get checkChng() {
    if (!this.scrollCont) return '';
    if (this.initScrlH != this.scrollCont.scrollHeight) {
      this.initiateVar();
      this.initScrlH = this.scrollCont.scrollHeight;
    }
    return '';
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.initiateVar);
    }
    this.lisSub?.unsubscribe();
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.scrollCont = this.scrollPar.nativeElement.querySelector(
      ':scope>.scrollInnerCont'
    );

    const nextElem = this.scrollCont?.nextElementSibling;
    if (nextElem && nextElem.firstElementChild) {
      this.scrollThumb = nextElem.firstElementChild as HTMLElement;
    } else {
      console.warn('Scroll thumb not found. DOM structure may be incorrect.');
      return;
    }

    const obs = new MutationObserver(() => {
      this.initiateVar();
    });

    obs.observe(this.scrollCont, { childList: true });

    setTimeout(() => {
      this.initiateVar();
    }, 50);

    window.addEventListener('resize', this.initiateVar);

    if (this.scrlListner) {
      this.lisSub = this.scrlListner.subscribe((top) => {
        this.scrollCont.scrollTop = top;
        this.setTop();
      });
    }
  }

  initiateVar = () => {
    this.scrlH = this.scrollCont.scrollHeight;
    this.viewH = this.scrollCont.clientHeight;
    this.scrollThumb.style.display =
      this.viewH == this.scrlH ? 'none' : 'block';
    this.maxScrl = this.scrlH - this.viewH;
    this.thumbH = (this.viewH * this.viewH) / this.scrlH;
    this.maxTop = this.viewH - this.thumbH;
    this.scrollThumb.style.height = `${this.thumbH}px`;
    this.setTop();
  };

  setTop() {
    this.top = (this.scrollCont.scrollTop * this.maxTop) / this.maxScrl;
    this.scrollThumb.style.top = `${this.top}px`;
    this.scrollEv.emit(this.scrollCont.scrollTop);
  }

  dragStart(e) {
    this.contactY = e.y - this.scrollThumb.getBoundingClientRect().top;
    this.initPosY = e.y;
    this.constTop = this.scrollThumb.getBoundingClientRect().top - this.top;
    e.preventDefault();
    this.dragging = true;
    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.stopDrag);
  }

  drag = (e) => {
    let diff = e.y - this.initPosY;
    this.initPosY = e.y;
    let finalTop = this.top + diff;
    let finalBcTop = finalTop + this.constTop;
    finalTop =
      finalTop < 0 ? 0 : finalTop > this.maxTop ? this.maxTop : finalTop;
    if (this.contactY != e.y - finalBcTop) {
      finalTop = e.y - this.contactY - this.constTop;
      finalTop =
        finalTop < 0 ? 0 : finalTop > this.maxTop ? this.maxTop : finalTop;
    }
    this.top = finalTop;
    this.scrollThumb.style.top = `${this.top}px`;
    let scrlTop = (this.top * this.maxScrl) / this.maxTop;
    this.scrollCont.scrollTop = scrlTop;
  };

  stopDrag = (e) => {
    document.removeEventListener('mousemove', this.drag);
    document.removeEventListener('mouseup', this.stopDrag);
    this.dragging = false;
  };
}
