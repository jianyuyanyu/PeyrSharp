![Using PeyrSharp](https://img.shields.io/badge/using-PeyrSharp-DD00FF?logo=nuget)
![GitHub contributors](https://img.shields.io/github/contributors/DevyusCode/PeyrSharp)
![GitHub issues](https://img.shields.io/github/issues/DevyusCode/PeyrSharp)
![GitHub](https://img.shields.io/github/license/DevyusCode/PeyrSharp)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/DevyusCode/PeyrSharp)
![Nuget](https://img.shields.io/nuget/dt/PeyrSharp)

<br />
<p align="center">
  <a href="https://github.com/DevyusCode/PeyrSharp">
    <img src=".github/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">PeyrSharp</h1>

  <p align="center">
    A C# library designed to make developers' job easier.
    <br />
    <a href="https://peyrsharp.leocorporation.dev/"><strong>View documentation »</strong></a>
    <br />
    <a href="https://github.com/DevyusCode/PeyrSharp/issues/new?assignees=&labels=bug&template=bug-report.yml&title=%5BBug%5D+">Report Bug</a>
    ·
    <a href="https://github.com/DevyusCode/PeyrSharp/issues/new?assignees=&labels=enhancement&template=feature-request.yml&title=%5BEnhancement%5D+">Request Feature</a>
    ·
    <a href="https://www.nuget.org/packages/PeyrSharp/">NuGet</a>

  </p>
</p>

## Introduction

PeyrSharp is a C# written library designed to make developers' life easier. We've all written code that we wish we hadn't. PeyrSharp is here to respond to this need; by implementing useful methods in various domains: Mathematics, Web/HTTP requests, unit converters, extensions, environment-related operations, and more!

## Modules

PeyrSharp is divided in multiple packages:

**PeyrSharp**, the main package, that contains all of the followings:

<details>
    <summary>
        <b>PeyrSharp.Core</b>, the basic methods and features of C#
    </summary>

- Maths
- Password
- Guid
- Converters
- Internet
- Crypt
- XmlHelper
- JsonHelper
- StatusInfo

</details>

<details>
    <summary>
        <b>PeyrSharp.Env</b>, methods related to the file system and to the current execution environment.
    </summary>

- FileSys
- Logger
- System
- Update
- UwpApp

</details>

<details>
    <summary>
        <b>PeyrSharp.Enums</b>, all enumerations used by PeyrSharp
    </summary>

- WindowsVersion
- TimeUnits
- SystemThemes
- OperatingSystems
- StorageUnits
- ControlAlignment
- PasswordPresets
- PasswordStrength

</details>

<details>
    <summary>
        <b>PeyrSharp.Exceptions</b>, all exceptions used by PeyrSharp
    </summary>

- RGBInvalidValueException
- HEXInvalidValueException
- InvalidGuidLengthException

</details>

<details>
    <summary>
        <b>PeyrSharp.Extensions</b>, extension methods, that extends basic types, such as <code>string</code>, <code>int</code>, <code>double</code> or arrays (<code>T[]</code>).
    </summary>

- String
- Int
- Double
- Array (`T[]`)

</details>

<details>
    <summary>
        <b>PeyrSharp.UiHelpers</b>, methods related to Windows Forms or to the Windows Presentation Framework (WPF).
    </summary>

- WinForms
- Screen
- WindowHelpers
- WindowInfo
- WPF

</details>

## Compatibility

### Platforms

Some modules of PeyrSharp are targeting features only available in specific operating systems. Thus, some packages aren't available on all platforms.

| Package/Platform | Windows | macOS | Linux + others |
| ---------------- | ------- | ----- | -------------- |
| Core             | ✅      | ✅    | ✅             |
| Env              | ✅      | ⚠️    | ⚠️             |
| Enums            | ✅      | ✅    | ✅             |
| Exceptions       | ✅      | ✅    | ✅             |
| Extensions       | ✅      | ✅    | ✅             |
| UiHelpers        | ✅      | ❌    | ❌             |

Caption:

- ✅ Full Support
- ⚠️ Partial Support
- ❌ Unsupported platform

### Frameworks

PeyrSharp is available in the following frameworks

- .NET 6
- .NET 7
- .NET 8

> Note: .NET Framework, .NET Core and .NET 5 are not targeted by PeyrSharp.

## Documentation

### Website

PeyrSharp has an [official website](https://peyrsharp.leocorporation.dev/) where you can find its documentation.

### Branches

There are two branches:

|  Name   |                                                                   Release                                                                   |                  Description                   |
| :-----: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------: |
| `main`  |                      ![GitHub release (latest by date)](https://img.shields.io/github/v/release/DevyusCode/PeyrSharp)                       |                Stable versions                 |
| `vNext` | ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/DevyusCode/PeyrSharp?include_prereleases) |      Next version of PeyrSharp (unstable)      |
|  `doc`  |                                                                     N/A                                                                     | The branch used to maintain the documentation. |

> Note: Other branches can also - of course - exists.

## Contribute

Here's what you'll need to contribute to this project:

- Visual Studio 2022 with:
  - .NET Desktop Development
  - Git
- .NET
  - .NET 6 (SDK + runtime)
  - .NET 7 (SDK + runtime)
  - .NET 8 (SDK + runtime)
- (_optional_) NuGet

## Badge

```md
![Using PeyrSharp](https://img.shields.io/badge/using-PeyrSharp-DD00FF?logo=nuget)
```

## License

Project under the [MIT](https://github.com/DevyusCode/PeyrSharp/blob/main/LICENSE) license.
