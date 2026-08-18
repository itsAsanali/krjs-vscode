# 🇰🇷 KRJS - 자바스크립트 (VS Code Extension)

> 한국어 자바스크립트(Korean JS) 프로그래밍 언어 및 런타임을 위한 공식 Visual Studio Code 확장 프로그램입니다.

[![VS Code Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/asanaliopensource.krjs?style=flat-square&color=purple)](https://marketplace.visualstudio.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## 🚀 소개 (About)

**KRJS**는 Visual Studio Code를 **자바스크립트(Korean JS)** 언어의 완벽한 개발 환경으로 탈바꿈시켜 주는 확장 프로그램입니다. 직관적인 구문 강조(Syntax Highlighting)와 원클릭 파일 실행 기능을 제공합니다.

---

## ✨ 주요 특징 (Features)

- 🎨 **구문 강조 (Syntax Highlighting)**: 한국어 키워드(`변수`, `상수`, `함수`, `만약`, `반복`, `클래스` 등), 문자열, 주석을 위한 스마트한 컬러링 지원.
- ⚡ **원클릭 실행 버튼**: 에디터 우측 상단의 **Play** 버튼을 눌러 현재 `.krjs` 파일을 즉시 실행.
- 🛠️ **CLI 연동**: VS Code 통합 터미널에서 전역 `krnode` 런타임과 완벽하게 연동.

---

## 📦 설치 방법 (Installation)

먼저 컴пиллятор 패키지가 전역으로 설치되어 있어야 합니다:
```bash
npm install -g krjs

```

### VS Code 확장 프로그램 설치:

1. 확장 프로그램 폴더를 VS Code에서 엽니다.
2. `F5` 키를 눌러 *Extension Development Host* 모드에서 테스트합니다.
3. `vsce package`를 통해 패키징한 후 `.vsix` 파일을 에디터에 설치합니다.

---

## 💡 빠른 시작 (Quick Start)

1. 새 파일을 생성하고 `.krjs` 확장자로 저장합니다 (예: `main.krjs`).
2. 한국어 자바스크립트 코드를 작성합니다:

```javascript
상수 인사말 = "안녕하세요, 자바스크립트!";

함수 인사하기(대상) {
    로그(대상 + " - 환영합니다! 🚀");
}

인사하기(인사말);

```

3. 에디터 상단의 **Play** 아이콘을 클릭하면 터미널에서 코드가 곧바로 실행됩니다! 🔥

---

## 📄 라이선스 (License)

이 프로젝트는 [MIT License](https://www.google.com/search?q=LICENSE)를 따릅니다.