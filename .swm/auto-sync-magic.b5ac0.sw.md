---
id: b5ac0
name: "🦄 Auto-Sync Magic "
file_version: 1.0.2
app_version: 0.9.9-6
file_blobs:
  angular.json: 94438843ffa697c793c39a4d67e74068f8aba4db
  package.json: f5948a8527cc15ed3fcb0948ec179658b704e346
---

## What happens when your code changes?

When your code changes, your documentation needs to be updated.

<br/>

|Change type |Examples                                                                                                           |Detection|Manual Action                 |Automated|
|------------|-------------------------------------------------------------------------------------------------------------------|---------|------------------------------|---------|
|Minor change|· A **line change**  <br>· Renaming a **variable**  <br>· A change of **key-value** pairs                          |✅        |Accept Swimm’s  <br>suggestion|✅        |
|Major change|· The **function** was deleted  <br>· The line **completely changed**  <br>· The **line moved** to a different file|✅        |Accept Swimm’s  <br>suggestion|❌        |

<br/>

## Try it yourself!

### Minor Change

The code below has changed **only in values.**  
Swimm detects it and offers you to **accept the fix ✅.**  
Accept the "fix" below 👇.

E.g: "Our Angular setup is set for `strict`[<sup id="1LbHwS">↓</sup>](#f-1LbHwS)mode under `📄 angular.json`"

<br/>

The value of `strict`[<sup id="1LbHwS">↓</sup>](#f-1LbHwS)mode is set to `true`[<sup id="lFHBX">↓</sup>](#f-lFHBX)
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 angular.json
```json
⬜ 4        "newProjectRoot": "projects",
⬜ 5        "projects": {
⬜ 6          "property-listing": {
🟩 7            "projectType": "application",
🟩 8            "schematics": {
🟩 9              "@schematics/angular:application": {
🟩 10               "strict": true
🟩 11             }
🟩 12           },
🟩 13           "root": "",
⬜ 14           "sourceRoot": "src",
⬜ 15           "prefix": "app",
⬜ 16           "architect": {
```

<br/>

### Major Change

In this example, multiple lines have been deleted.  
This is a **Radical** change.  
**Click on "Reselect" to fix this snippet** 👇. Note that the **path** of this file has changed as well `📄 package.json`

<br/>

Setting up `angular`[<sup id="2wUO4f">↓</sup>](#f-2wUO4f): `12.2.0`[<sup id="hykT2">↓</sup>](#f-hykT2)
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 package.json
```json
⬜ 8          "watch": "ng build --watch --configuration development",
⬜ 9          "test": "ng test"
⬜ 10       },
🟩 11       "private": true,
🟩 12       "dependencies": {
🟩 13         "@angular/animations": "~12.2.0",
🟩 14         "@angular/common": "~12.2.0",
🟩 15         "@angular/compiler": "~12.2.0",
🟩 16         "@angular/core": "~12.2.0",
⬜ 17         "@angular/forms": "~12.2.0",
⬜ 18         "@angular/localize": "~12.2.0",
⬜ 19         "@angular/platform-browser": "~12.2.0",
```

<br/>

<!-- THIS IS AN AUTOGENERATED SECTION. DO NOT EDIT THIS SECTION DIRECTLY -->
### Swimm Note

<span id="f-hykT2">12.2.0</span>[^](#hykT2) - "package.json" L16
```json
    "@angular/core": "~12.2.0",
```

<span id="f-2wUO4f">angular</span>[^](#2wUO4f) - "package.json" L16
```json
    "@angular/core": "~12.2.0",
```

<span id="f-1LbHwS">strict</span>[^](#1LbHwS) - "angular.json" L10
```json
          "strict": true
```

<span id="f-lFHBX">true</span>[^](#lFHBX) - "angular.json" L10
```json
          "strict": true
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](http://localhost:5000/repos/Z2l0aHViJTNBJTNBcHJvcGVydHktbGlzdGluZy1zYW5kYm94JTNBJTNBc3dpbW1pbw==/docs/b5ac0).