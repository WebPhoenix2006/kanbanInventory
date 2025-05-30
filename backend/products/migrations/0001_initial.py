# Generated by Django 4.2 on 2025-05-28 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('price', models.FloatField()),
                ('quantity', models.IntegerField()),
                ('unit', models.CharField(max_length=50)),
                ('exp_date', models.DateField()),
                ('threshold', models.IntegerField()),
                ('category', models.CharField(max_length=100)),
            ],
        ),
    ]
