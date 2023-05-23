# 腾讯云代码分析

**腾讯云代码分析**（**Tencent Cloud Code Analysis, TCA**）起步于 2012 年（内部代号CodeDog），是集众多代码分析工具的云原生、分布式、高性能的代码综合分析跟踪管理平台，其主要功能是精准跟踪管理代码分析发现的代码质量缺陷、代码规范、代码安全漏洞、无效代码，以及度量代码复杂度、重复代码、代码统计。持续跟踪分析代码，观测项目代码质量，支撑团队传承代码文化。

用心关注每行代码迭代，助力传承卓越代码文化！


**代码分析**是通过词法分析、语法分析、控制流、数据流分析等技术对程序代码进行扫描，对代码进行综合分析，验证代码是否满足规范性、安全性、可靠性、可维护性等指标的一种代码分析技术。

## 主要功能

### 代码检查

通过代码检查精准跟踪管理发现的代码质量缺陷、代码规范、代码安全漏洞、无效代码等。

目前已集成众多自研、知名开源分析工具，并采用了分层分离架构，可以满足团队快速自助管理工具。

### 代码度量

包含代码圈复杂度、代码重复率和代码统计等度量信息。

### 代码圈复杂度

圈复杂度也称为条件复杂度或循环复杂度，它可以用来衡量一个模块判定结构的复杂程度。圈复杂度大说明程序代码的判断逻辑复杂，可能造成代码质量低下且难于测试和维护。

定期分析工程项目中代码的圈复杂度，可以有效地帮助开发与测试逐步优化代码质量。

### 代码重复率

定期分析工程项目中的重复代码，可以有效地帮助开发发现冗余代码，进行代码抽象和重构，降低代码风险，以便于更好的管理和维护代码。

### 代码统计

支持全量增量展示代码行数统计，包含代码行、注释行和空白行，可以有效地跟踪了解工程项目中代码量持续变化，并可以查看各个语言的占比情况。