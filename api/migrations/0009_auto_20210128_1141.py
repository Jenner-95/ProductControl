# Generated by Django 2.2.13 on 2021-01-28 17:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20210128_1125'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bitacora',
            name='action',
        ),
        migrations.RemoveField(
            model_name='bitacora',
            name='user',
        ),
        migrations.DeleteModel(
            name='BuenasNoticias',
        ),
        migrations.RemoveField(
            model_name='commission',
            name='name_user',
        ),
        migrations.RemoveField(
            model_name='company',
            name='industry',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='company',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='life_cycles',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='userowner',
        ),
        migrations.RemoveField(
            model_name='leads',
            name='business_stage',
        ),
        migrations.RemoveField(
            model_name='leads',
            name='coin_lead',
        ),
        migrations.RemoveField(
            model_name='leads',
            name='company',
        ),
        migrations.RemoveField(
            model_name='leads',
            name='contact',
        ),
        migrations.RemoveField(
            model_name='leads',
            name='owner_lead',
        ),
        migrations.RemoveField(
            model_name='leads',
            name='sales_channel',
        ),
        migrations.RemoveField(
            model_name='leads',
            name='sales_funnel',
        ),
        migrations.RemoveField(
            model_name='percentagegoals',
            name='annual_goal',
        ),
        migrations.RemoveField(
            model_name='percentagegoals',
            name='business_lines',
        ),
        migrations.RemoveField(
            model_name='salesfunnel',
            name='business_lines',
        ),
        migrations.RemoveField(
            model_name='salesfunnel',
            name='sales_channel',
        ),
        migrations.RemoveField(
            model_name='stagesales',
            name='sale_funnel',
        ),
        migrations.RemoveField(
            model_name='tasks',
            name='lead',
        ),
        migrations.DeleteModel(
            name='TypeClient',
        ),
        migrations.DeleteModel(
            name='TypeProject',
        ),
        migrations.DeleteModel(
            name='Vendedor',
        ),
        migrations.DeleteModel(
            name='Action',
        ),
        migrations.DeleteModel(
            name='AnnualGoal',
        ),
        migrations.DeleteModel(
            name='Bitacora',
        ),
        migrations.DeleteModel(
            name='BusinessLines',
        ),
        migrations.DeleteModel(
            name='ChangeCoin',
        ),
        migrations.DeleteModel(
            name='Commission',
        ),
        migrations.DeleteModel(
            name='Company',
        ),
        migrations.DeleteModel(
            name='Contact',
        ),
        migrations.DeleteModel(
            name='Industry',
        ),
        migrations.DeleteModel(
            name='Leads',
        ),
        migrations.DeleteModel(
            name='LifeCycle',
        ),
        migrations.DeleteModel(
            name='PercentageGoals',
        ),
        migrations.DeleteModel(
            name='SalesChannel',
        ),
        migrations.DeleteModel(
            name='SalesFunnel',
        ),
        migrations.DeleteModel(
            name='StageSales',
        ),
        migrations.DeleteModel(
            name='Tasks',
        ),
    ]
