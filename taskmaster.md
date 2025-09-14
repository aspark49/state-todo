# 리액트 상태관리 라이브려리 별 Todo App 구현
## 사용 라이브러리
- useState, useReducer, useContext
- redux
- zustand
## Todo App 화면 구조 및 기능
- 라이브러리 선택
  - useState, useReducer, useContext
    - todo 목록
      - todo
        - todo 체크 활성/비활성화
        - todo 삭제 버튼
    - todo 추가 버튼
  - redux
    - todo 목록
      - todo
        - todo 체크 활성/비활성화
        - todo 삭제 버튼
    - todo 추가 버튼
  - zustand
    - todo 목록
      - todo
        - todo 체크 활성/비활성화
        - todo 삭제 버튼
    - todo 추가 버튼
### 참고
- 데이터는 네트워크 통신 없이 localstorage에 저장

## 개발 절차
### 1단계: 프로젝트 기본 설정
- [x] 현재 React + TypeScript + Vite 프로젝트 구조 확인
- [x] 필요한 의존성 설치 (redux, zustand 등)
- [x] 공통 타입 및 유틸리티 정의
- [x] localStorage 유틸리티 함수 생성
- [x] React Router 설치 및 라우팅 구조 설정

### 2단계: useState 버전 Todo App 구현
- [x] Todo 타입 정의
- [x] Todo 컴포넌트 생성
- [x] TodoList 컴포넌트 생성
- [x] Todo 추가 기능 구현
- [x] Todo 체크/언체크 기능 구현
- [x] Todo 삭제 기능 구현
- [x] localStorage 연동
- [x] useState 버전 완성

### 3단계: useReducer 버전 Todo App 구현
- [x] Todo 상태를 useReducer로 관리
- [x] 액션 타입 정의
- [x] 리듀서 함수 구현
- [x] Todo 컴포넌트를 useReducer로 리팩토링
- [x] useReducer 버전 완성

### 4단계: useContext 버전 Todo App 구현
- [x] TodoContext 생성
- [x] TodoProvider 구현
- [x] useContext를 사용한 전역 상태 관리
- [x] 컴포넌트에서 Context 사용
- [x] useContext 버전 완성

### 5단계: Redux 버전 Todo App 구현
- [ ] Redux Toolkit 설치 및 설정
- [ ] Todo 슬라이스 생성
- [ ] Store 설정
- [ ] Redux DevTools 설정
- [ ] Todo 컴포넌트를 Redux로 구현
- [ ] Redux 버전 완성

### 6단계: Zustand 버전 Todo App 구현
- [ ] Zustand 설치
- [ ] Todo 스토어 생성
- [ ] Todo 컴포넌트를 Zustand로 구현
- [ ] Zustand 버전 완성

### 7단계: UI/UX 개선
- [ ] 공통 스타일링 적용
- [ ] 각 버전별 구분을 위한 UI 개선
- [ ] 반응형 디자인 적용
- [ ] 사용자 경험 최적화

### 8단계: 테스트 및 최적화
- [ ] 각 상태관리 방식별 성능 테스트
- [ ] 코드 최적화
- [ ] 최종 검증 및 버그 수정
- [ ] 각 버전별 특징 및 장단점 문서화
