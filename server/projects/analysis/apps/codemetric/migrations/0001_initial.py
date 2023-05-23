# -*- coding: utf-8 -*-
# Copyright (c) 2021-2023 THL A29 Limited
#
# This source code file is made available under MIT License
# See LICENSE for details
# ==============================================================================

# Generated by Django 3.1.12 on 2021-11-29 11:34
"""
codemetric数据迁移脚本
0001_initial
"""

import django.db.models.manager
from django.db import migrations, models

import apps.base.basemodel


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ('codeproj', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            # codemetric_cyclomaticcomplexityscan
            name='CyclomaticComplexityScan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('creator', models.CharField(blank=True, max_length=128, null=True, verbose_name='创建人')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('modifier', models.CharField(blank=True, max_length=128, null=True, verbose_name='最近修改人')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('deleter', models.CharField(blank=True, max_length=128, null=True, verbose_name='删除人')),
                ('last_revision', models.CharField(blank=True, max_length=256, null=True, verbose_name='旧版本号')),
                ('diff_cc_num', models.IntegerField(blank=True, null=True, verbose_name='新增的数量')),
                ('cc_open_num', models.IntegerField(blank=True, help_text='打开的数量', null=True)),
                ('cc_average_of_lines', models.FloatField(blank=True, help_text='千行代码平均圈复杂度', null=True)),
                ('cc_fix_num', models.IntegerField(default=0, help_text='修复的数量')),
                ('worse_cc_file_num', models.IntegerField(blank=True, help_text='圈复杂度恶化的文件数据', null=True)),
                ('min_ccn', models.IntegerField(blank=True, null=True)),
                ('code_line_num', models.IntegerField(blank=True, help_text='扫描代码行数', null=True)),
                ('default_summary', models.TextField(blank=True, null=True, verbose_name='默认标准的总结')),
                ('custom_summary', models.TextField(blank=True, null=True, verbose_name='自定义标准的总结')),
                ('scan', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='codeproj.scan')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            # codemetric_duplicateissuecomment
            name='DuplicateIssueComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_id', models.IntegerField(verbose_name='项目 id', null=True, blank=True)),
                ('issue_id', models.IntegerField(verbose_name='issue id')),
                ('action', models.CharField(max_length=128, verbose_name='操作')),
                ('message', models.CharField(blank=True, max_length=512, null=True, verbose_name='信息')),
                ('created_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('creator', models.CharField(max_length=64, verbose_name='创建人')),
            ],
        ),
        migrations.CreateModel(
            # codemetric_duplicatescan
            name='DuplicateScan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_revision', models.CharField(blank=True, max_length=256, null=True, verbose_name='旧版本号')),
                ('duplicate_file_count', models.IntegerField(blank=True, null=True, verbose_name='重复文件数')),
                ('duplicate_block_count', models.IntegerField(blank=True, null=True, verbose_name='重复块数')),
                ('duplicate_line_count', models.IntegerField(blank=True, null=True, verbose_name='重复行数')),
                ('diff_duplicate_block_count', models.IntegerField(blank=True, null=True, verbose_name='差异重复块数')),
                ('diff_duplicate_line_count', models.IntegerField(blank=True, null=True, verbose_name='差异重复行数')),
                ('close_issue_count', models.IntegerField(blank=True, null=True, verbose_name='关闭历史issue数')),
                ('new_issue_count', models.IntegerField(blank=True, null=True, verbose_name='新增issue数')),
                ('reopen_issue_count', models.IntegerField(blank=True, null=True, verbose_name='重新打开issue数')),
                ('ignored_issue_count', models.IntegerField(blank=True, null=True, verbose_name='入库忽略issue数')),
                ('duplicate_rate', models.FloatField(blank=True, null=True, verbose_name='重复率')),
                ('default_summary', models.TextField(blank=True, null=True, verbose_name='默认标准的总结')),
                ('custom_summary', models.TextField(blank=True, null=True, verbose_name='自定义标准的总结')),
                ('unique_duplicate_line_count', models.IntegerField(blank=True, null=True,
                                                                    verbose_name='上报数据去重后的重复行数')),
                ('total_duplicate_line_count', models.IntegerField(blank=True, null=True,
                                                                   verbose_name='项目总的去重后的重复行数')),
                ('total_line_count', models.IntegerField(blank=True, null=True, verbose_name='项目总的代码行数')),
                ('scan', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='codeproj.scan',
                                              verbose_name='扫描记录')),
            ],
        ),
        migrations.CreateModel(
            # codemetric_duplicateissue
            name='DuplicateIssue',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('creator', models.CharField(blank=True, max_length=128, null=True, verbose_name='创建人')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('modifier', models.CharField(blank=True, max_length=128, null=True, verbose_name='最近修改人')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('deleter', models.CharField(blank=True, max_length=128, null=True, verbose_name='删除人')),
                ('issue_hash', models.CharField(max_length=128, verbose_name='Issue Hash')),
                ('state',
                 models.IntegerField(choices=[(1, '未处理'), (2, '可忽略'), (3, '关闭')], default=1, verbose_name='状态')),
                ('owner', models.CharField(blank=True, max_length=128, null=True, verbose_name='责任人')),
                ('dir_path', models.CharField(max_length=512, verbose_name='目录路径')),
                ('file_name', models.CharField(max_length=512, verbose_name='文件名')),
                ('file_path', models.CharField(max_length=1024, verbose_name='文件路径')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codeproj.project',
                                              verbose_name='项目名称')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            # codemetric_duplicatefile
            name='DuplicateFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('creator', models.CharField(blank=True, max_length=128, null=True, verbose_name='创建人')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('modifier', models.CharField(blank=True, max_length=128, null=True, verbose_name='最近修改人')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('deleter', models.CharField(blank=True, max_length=128, null=True, verbose_name='删除人')),
                ('issue_hash', models.CharField(blank=True, max_length=128, null=True, verbose_name='Issue Hash')),
                ('dir_path', models.CharField(max_length=512, verbose_name='目录路径')),
                ('file_name', models.CharField(max_length=512, verbose_name='文件名')),
                ('file_path', models.CharField(max_length=1024, verbose_name='文件路径')),
                ('duplicate_rate', models.FloatField(verbose_name='重复率')),
                ('total_line_count', models.IntegerField(verbose_name='总行数')),
                ('total_duplicate_line_count', models.IntegerField(verbose_name='总重复行数')),
                ('distinct_hash_num', models.IntegerField(verbose_name="重复代码块数（去重）", blank=True, null=True)),
                ('block_num', models.IntegerField(verbose_name='重复代码块数')),
                ('last_modifier', models.CharField(blank=True, max_length=128, null=True, verbose_name='最近修改人')),
                ('change_type',
                 models.CharField(blank=True, choices=[('add', '新增'), ('del', '删除'), ('mod', '修改')], max_length=64,
                                  null=True, verbose_name='更改类型')),
                ('scm_revision', models.CharField(blank=True, max_length=512, null=True, verbose_name='版本号')),
                ('is_latest', models.BooleanField(blank=True, default=True, verbose_name='是否最新')),
                ('issue', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE,
                                            to='codemetric.duplicateissue', verbose_name='缺陷单')),
                ('project', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE,
                                              to='codeproj.project', verbose_name='项目名称')),
                ('scan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codemetric.duplicatescan',
                                           verbose_name='扫描记录')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            # codemetric_duplicateblock
            name='DuplicateBlock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_id', models.IntegerField(verbose_name='项目 id', blank=True, null=True)),
                ('scan_id', models.IntegerField(verbose_name='扫描 id', blank=True, null=True)),
                ('block_hash', models.CharField(blank=True, max_length=512, null=True, verbose_name='区块标识')),
                ('token_num', models.IntegerField(verbose_name='代码块长度')),
                ('duplicate_times', models.IntegerField(verbose_name='重复次数')),
                ('duplicate_rate', models.FloatField(verbose_name='重复占比')),
                ('start_line_num', models.IntegerField(verbose_name='起始行号')),
                ('end_line_num', models.IntegerField(verbose_name='结束行号')),
                ('duplicate_line_count', models.IntegerField(verbose_name='重复行数')),
                ('last_modifier', models.CharField(blank=True, max_length=128, null=True, verbose_name='最近修改人')),
                ('change_type',
                 models.CharField(blank=True, choices=[('add', '新增'), ('del', '删除'), ('mod', '修改')], max_length=64,
                                  null=True, verbose_name='更改类型')),
                ('related_modifiers', models.CharField(blank=True, max_length=512, null=True, verbose_name='代码相关人')),
                ('duplicate_file',
                 models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codemetric.duplicatefile',
                                   verbose_name='代码文件')),
            ],
        ),
        migrations.CreateModel(
            name='CyclomaticComplexityFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('creator', models.CharField(blank=True, max_length=128, null=True, verbose_name='创建人')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('modifier', models.CharField(blank=True, max_length=128, null=True, verbose_name='最近修改人')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('deleter', models.CharField(blank=True, max_length=128, null=True, verbose_name='删除人')),
                ('over_func_cc', models.IntegerField(default=0, verbose_name='自定义超标方法的圈复杂度总和')),
                ('over_cc_sum', models.IntegerField(default=0, verbose_name='文件超标方法圈复杂度超过阈值的差值之和')),
                ('over_cc_avg', models.IntegerField(default=0, verbose_name='文件超标方法圈复杂度平均数')),
                ('over_cc_func_count', models.IntegerField(default=0, verbose_name='文件圈复杂度超标方法个数')),
                ('diff_over_func_cc', models.IntegerField(default=0, verbose_name='自定义超标方法的圈复杂度总和增量值')),
                ('diff_over_cc_sum', models.IntegerField(default=0,
                                                         verbose_name='文件超标方法圈复杂度超过阈值的差值之和的增量值')),
                ('diff_over_cc_avg', models.IntegerField(default=0, verbose_name='文件超标方法圈复杂度平均数增量值')),
                ('diff_over_cc_func_count', models.IntegerField(default=0, verbose_name='文件圈复杂度超标方法个数增量值')),
                ('worse', models.BooleanField(default=False,
                                              verbose_name='文件圈复杂度恶化标志，True表示进一步恶化，False表示没有恶化')),
                ('file_hash', models.CharField(max_length=64, unique=True, verbose_name='文件唯一Hash码')),
                ('g_file_hash',
                 models.CharField(blank=True, db_index=True, max_length=64, null=True, verbose_name='文件全局Hash码')),
                ('file_path', models.CharField(max_length=512, verbose_name='文件路径')),
                ('state', models.IntegerField(default=1, verbose_name='问题状态，1为未处理，2为已处理，3为已关闭')),
                ('change_type', models.IntegerField(choices=[(0, '无变化'), (1, '新增'), (2, '删除'), (3, '修改')],
                                                    default=0, verbose_name='圈复杂度变化情况')),
                ('last_modifier', models.CharField(max_length=64, verbose_name='最近修改人')),
                (
                'last_modifier_email', models.CharField(blank=True, max_length=128, null=True,
                                                        verbose_name='最近修改人邮箱')),
                ('related_modifiers', models.CharField(blank=True, max_length=256, null=True,
                                                       verbose_name='代码相关人')),
                ('author', models.CharField(blank=True, max_length=64, null=True, verbose_name='责任人')),
                (
                'most_weight_modifier', models.CharField(blank=True, max_length=64, null=True,
                                                         verbose_name='最大权重修改人')),
                ('most_weight_modifier_email',
                 models.CharField(blank=True, max_length=128, null=True, verbose_name='最大权重修改人的邮箱')),
                ('weight_modifiers', models.TextField(blank=True, null=True, verbose_name='权重列表')),
                ('file_owners',
                 models.CharField(blank=True, max_length=256, null=True,
                                  verbose_name="文件负责人，多个时使用英文分号';'分隔")),
                ('language', models.CharField(blank=True, max_length=64, null=True, verbose_name='文件所属语言')),
                ('tapd_ws_id', models.IntegerField(blank=True, db_index=True, null=True, verbose_name='tapd项目id')),
                ('tapd_bug_id', models.CharField(blank=True, db_index=True, max_length=32, null=True)),
                ('revision', models.CharField(blank=True, max_length=64, null=True, verbose_name='问题引入的版本号')),
                ('ci_time', models.DateTimeField(blank=True, db_index=True, null=True,
                                                 verbose_name='问题引入版本号的关联时间')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codeproj.project',
                                              verbose_name='所属项目')),
                ('scan_close', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE,
                                                 related_name='file_scan_close',
                                                 to='codemetric.cyclomaticcomplexityscan',
                                                 verbose_name='圈复杂度降低的扫描')),
                ('scan_open', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE,
                                                related_name='file_scan_open', to='codemetric.cyclomaticcomplexityscan',
                                                verbose_name='发现的扫描')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            # codemetric_cyclomaticcomplexity
            name='CyclomaticComplexity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('creator', models.CharField(blank=True, max_length=128, null=True, verbose_name='创建人')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('modifier', models.CharField(blank=True, max_length=128, null=True, verbose_name='最近修改人')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('deleter', models.CharField(blank=True, max_length=128, null=True, verbose_name='删除人')),
                ('ccn', models.IntegerField(default=0, verbose_name='圈复杂度')),
                ('g_cc_hash',
                 models.CharField(blank=True, db_index=True, max_length=64, null=True, verbose_name='全局Hash码，废弃')),
                ('cc_hash',
                 models.CharField(blank=True, db_index=True, max_length=64, null=True, verbose_name='Hash码，废弃')),
                ('unique_cc_hash',
                 models.CharField(blank=True, db_index=True, max_length=64, null=True, verbose_name='不连续Hash码')),
                ('file_path', models.CharField(max_length=512, verbose_name='文件路径')),
                ('file_hash', models.CharField(db_index=True, max_length=40, null=True, verbose_name='所在文件hash值')),
                ('func_name', models.CharField(max_length=512, verbose_name='函数名称')),
                ('func_param_num', models.IntegerField(default=0, verbose_name='函数参数数量')),
                ('long_name', models.CharField(max_length=1024, verbose_name='函数名称')),
                ('change_type', models.IntegerField(choices=[(0, '无'), (1, '新增'), (2, '删除'), (3, '修改')], default=0,
                                                    verbose_name='圈复杂度变化情况')),
                ('status', models.IntegerField(choices=[(1, '需要关注'), (2, '无须关注')], default=1,
                                               verbose_name='状态,废弃')),
                ('last_modifier', models.CharField(max_length=16, verbose_name='最近修改人')),
                ('author', models.CharField(blank=True, max_length=16, null=True, verbose_name='责任人')),
                ('related_modifiers', models.CharField(blank=True, max_length=256, null=True, verbose_name='代码相关人')),
                (
                'most_weight_modifier', models.CharField(blank=True, max_length=64, null=True,
                                                         verbose_name='最大权重修改人')),
                ('most_weight_modifier_email',
                 models.CharField(blank=True, max_length=128, null=True, verbose_name='最大权重修改人的邮箱')),
                ('weight_modifiers', models.TextField(blank=True, null=True, verbose_name='权重列表')),
                ('is_tapdbug', models.BooleanField(default=False, verbose_name='是TAPD缺陷单，废弃')),
                ('ignore_time', models.DateTimeField(null=True, verbose_name='忽略问题时间，废弃')),
                ('is_latest', models.BooleanField(default=False, verbose_name='是否为最近一次扫描')),
                ('language', models.CharField(blank=True, max_length=64, null=True, verbose_name='文件所属语言')),
                ('revision', models.CharField(blank=True, max_length=64, verbose_name='版本号')),
                ('ci_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='问题引入的时间')),
                ('diff_ccn', models.IntegerField(blank=True, null=True, verbose_name='差异圈复杂度')),
                ('token', models.IntegerField(blank=True, null=True, verbose_name='token数')),
                ('line_num', models.IntegerField(blank=True, null=True, verbose_name='函数行数,包含空行和函数内部注释')),
                ('code_line_num', models.IntegerField(blank=True, null=True, verbose_name='函数代码行数')),
                ('start_line_no', models.IntegerField(blank=True, null=True, verbose_name='起始行号')),
                ('end_line_no', models.IntegerField(blank=True, null=True, verbose_name='结束行号')),
                ('scan_revision', models.CharField(blank=True, max_length=64, null=True, verbose_name='扫描版本号')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codeproj.project',
                                              verbose_name='所属项目')),
                ('scan_close',
                 models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='scan_close',
                                   to='codemetric.cyclomaticcomplexityscan', verbose_name='圈复杂度降低的扫描,废弃')),
                ('scan_open',
                 models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='scan_open',
                                   to='codemetric.cyclomaticcomplexityscan', verbose_name='发现的扫描')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            # codemetric_clocscan
            name='ClocScan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_revision', models.CharField(blank=True, max_length=256, null=True, verbose_name='旧版本号')),
                ('code_line_num', models.IntegerField(blank=True, null=True, verbose_name='代码行数')),
                ('comment_line_num', models.IntegerField(blank=True, null=True, verbose_name='注释行数')),
                ('blank_line_num', models.IntegerField(blank=True, null=True, verbose_name='空白行数')),
                ('total_line_num', models.IntegerField(blank=True, null=True, verbose_name='总行数')),
                ('add_code_line_num', models.IntegerField(blank=True, null=True, verbose_name='新增代码行数')),
                ('add_comment_line_num', models.IntegerField(blank=True, null=True, verbose_name='新增注释行数')),
                ('add_blank_line_num', models.IntegerField(blank=True, null=True, verbose_name='新增空白行数')),
                ('add_total_line_num', models.IntegerField(blank=True, null=True, verbose_name='新增总行数')),
                ('mod_code_line_num', models.IntegerField(blank=True, null=True, verbose_name='修改代码行数')),
                ('mod_comment_line_num', models.IntegerField(blank=True, null=True, verbose_name='修改注释行数')),
                ('mod_blank_line_num', models.IntegerField(blank=True, null=True, verbose_name='修改空白行数')),
                ('mod_total_line_num', models.IntegerField(blank=True, null=True, verbose_name='修改总行数')),
                ('del_code_line_num', models.IntegerField(blank=True, null=True, verbose_name='删除代码行数')),
                ('del_comment_line_num', models.IntegerField(blank=True, null=True, verbose_name='删除注释行数')),
                ('del_blank_line_num', models.IntegerField(blank=True, null=True, verbose_name='删除空白行数')),
                ('del_total_line_num', models.IntegerField(blank=True, null=True, verbose_name='删除总行数')),
                ('scan', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='codeproj.scan',
                                              verbose_name='扫描记录')),
            ],
        ),
        migrations.CreateModel(
            # codemetric_cloclanguage
            name='ClocLanguage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code_line_num', models.IntegerField(verbose_name='代码行数')),
                ('comment_line_num', models.IntegerField(verbose_name='注释行数')),
                ('blank_line_num', models.IntegerField(verbose_name='空白行数')),
                ('total_line_num', models.IntegerField(verbose_name='总行数')),
                ('add_code_line_num', models.IntegerField(verbose_name='新增代码行数')),
                ('add_comment_line_num', models.IntegerField(verbose_name='新增注释行数')),
                ('add_blank_line_num', models.IntegerField(verbose_name='新增空白行数')),
                ('add_total_line_num', models.IntegerField(verbose_name='新增总行数')),
                ('mod_code_line_num', models.IntegerField(verbose_name='修改代码行数')),
                ('mod_comment_line_num', models.IntegerField(verbose_name='修改注释行数')),
                ('mod_blank_line_num', models.IntegerField(verbose_name='修改空白行数')),
                ('mod_total_line_num', models.IntegerField(verbose_name='修改总行数')),
                ('del_code_line_num', models.IntegerField(verbose_name='删除代码行数')),
                ('del_comment_line_num', models.IntegerField(verbose_name='删除注释行数')),
                ('del_blank_line_num', models.IntegerField(verbose_name='删除空白行数')),
                ('del_total_line_num', models.IntegerField(verbose_name='删除总行数')),
                ('is_latest', models.BooleanField(blank=True, default=True, verbose_name='是否最新')),
                ('name', models.CharField(max_length=64, verbose_name='语言名称')),
                ('file_num', models.IntegerField(verbose_name='文件数')),
                ('project', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE,
                                              to='codeproj.project', verbose_name='项目名称')),
                ('scan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codemetric.clocscan',
                                           verbose_name='扫描')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            # codemetric_clocdir
            name='ClocDir',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code_line_num', models.IntegerField(verbose_name='代码行数')),
                ('comment_line_num', models.IntegerField(verbose_name='注释行数')),
                ('blank_line_num', models.IntegerField(verbose_name='空白行数')),
                ('total_line_num', models.IntegerField(verbose_name='总行数')),
                ('add_code_line_num', models.IntegerField(verbose_name='新增代码行数')),
                ('add_comment_line_num', models.IntegerField(verbose_name='新增注释行数')),
                ('add_blank_line_num', models.IntegerField(verbose_name='新增空白行数')),
                ('add_total_line_num', models.IntegerField(verbose_name='新增总行数')),
                ('mod_code_line_num', models.IntegerField(verbose_name='修改代码行数')),
                ('mod_comment_line_num', models.IntegerField(verbose_name='修改注释行数')),
                ('mod_blank_line_num', models.IntegerField(verbose_name='修改空白行数')),
                ('mod_total_line_num', models.IntegerField(verbose_name='修改总行数')),
                ('del_code_line_num', models.IntegerField(verbose_name='删除代码行数')),
                ('del_comment_line_num', models.IntegerField(verbose_name='删除注释行数')),
                ('del_blank_line_num', models.IntegerField(verbose_name='删除空白行数')),
                ('del_total_line_num', models.IntegerField(verbose_name='删除总行数')),
                ('is_latest', models.BooleanField(blank=True, default=True, verbose_name='是否最新')),
                ('parent_path', models.CharField(max_length=512, null=True, verbose_name='父目录地址')),
                ('dir_path', models.CharField(max_length=512, verbose_name='目录地址')),
                ('file_num', models.IntegerField(verbose_name='文件数')),
                ('project', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE,
                                              to='codeproj.project', verbose_name='项目名称')),
                ('scan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codemetric.clocscan',
                                           verbose_name='扫描')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='PersonCyclomaticComplexity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('creator', models.CharField(blank=True, max_length=128, null=True, verbose_name='创建人')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('modifier', models.CharField(blank=True, max_length=128, null=True, verbose_name='最近修改人')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('deleter', models.CharField(blank=True, max_length=128, null=True, verbose_name='删除人')),
                ('author', models.CharField(max_length=128, verbose_name='负责人名称')),
                ('author_email', models.CharField(max_length=256, verbose_name='负责人邮箱')),
                ('over_cc_func_count', models.IntegerField(verbose_name='函数超标数量')),
                ('over_cc_sum', models.IntegerField(verbose_name='函数超标总和')),
                ('ext_data', models.JSONField(blank=True, null=True, verbose_name='扩展数据')),
                ('project',
                 models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='codeproj.project',
                                   verbose_name='所属项目')),
                ('scan', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL,
                                           to='codemetric.cyclomaticcomplexityscan', verbose_name='关联扫描')),
            ],
            options={
                'unique_together': {('project', 'scan', 'author')},
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            # codemetric_clocfile
            name='ClocFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code_line_num', models.IntegerField(verbose_name='代码行数')),
                ('comment_line_num', models.IntegerField(verbose_name='注释行数')),
                ('blank_line_num', models.IntegerField(verbose_name='空白行数')),
                ('total_line_num', models.IntegerField(verbose_name='总行数')),
                ('add_code_line_num', models.IntegerField(verbose_name='新增代码行数')),
                ('add_comment_line_num', models.IntegerField(verbose_name='新增注释行数')),
                ('add_blank_line_num', models.IntegerField(verbose_name='新增空白行数')),
                ('add_total_line_num', models.IntegerField(verbose_name='新增总行数')),
                ('mod_code_line_num', models.IntegerField(verbose_name='修改代码行数')),
                ('mod_comment_line_num', models.IntegerField(verbose_name='修改注释行数')),
                ('mod_blank_line_num', models.IntegerField(verbose_name='修改空白行数')),
                ('mod_total_line_num', models.IntegerField(verbose_name='修改总行数')),
                ('del_code_line_num', models.IntegerField(verbose_name='删除代码行数')),
                ('del_comment_line_num', models.IntegerField(verbose_name='删除注释行数')),
                ('del_blank_line_num', models.IntegerField(verbose_name='删除空白行数')),
                ('del_total_line_num', models.IntegerField(verbose_name='删除总行数')),
                ('is_latest', models.BooleanField(blank=True, default=True, verbose_name='是否最新')),
                ('dir_path', models.CharField(max_length=512, verbose_name='目录地址')),
                ('file_name', models.CharField(max_length=512, verbose_name='文件名')),
                ('business_names', models.CharField(blank=True, max_length=512, null=True, verbose_name='业务')),
                ('subscribers', models.CharField(blank=True, max_length=512, null=True, verbose_name='关注人')),
                ('language', models.CharField(max_length=32, verbose_name='语言')),
                ('change_type',
                 models.CharField(blank=True, choices=[('add', '新增'), ('del', '删除'), ('mod', '修改')], max_length=64,
                                  null=True, verbose_name='更改类型')),
                ('project', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE,
                                              to='codeproj.project', verbose_name='项目名称')),
                ('scan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='codemetric.clocscan',
                                           verbose_name='扫描')),
            ],
            options={
                'index_together': {('project', 'is_latest')},
            },
        ),
    ]