# Generated by Django 2.2.13 on 2021-01-22 00:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20210121_1844'),
    ]

    operations = [
        migrations.AlterField(
            model_name='administrativeexpenses',
            name='budget',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='budget', to='api.Budget'),
        ),
    ]
