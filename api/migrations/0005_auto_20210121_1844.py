# Generated by Django 2.2.13 on 2021-01-22 00:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_administrativeexpenses_administrative_expenses_header'),
    ]

    operations = [
        migrations.AlterField(
            model_name='administrativeexpenses',
            name='administrative_expenses_header',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='adminmodules', to='api.AdministrativeExpensesHeader'),
        ),
    ]
