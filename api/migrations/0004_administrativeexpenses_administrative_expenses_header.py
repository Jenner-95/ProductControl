# Generated by Django 2.2.13 on 2021-01-22 00:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210121_1816'),
    ]

    operations = [
        migrations.AddField(
            model_name='administrativeexpenses',
            name='administrative_expenses_header',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='adminmodules', to='api.AdministrativeExpensesHeader'),
        ),
    ]
