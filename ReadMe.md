#### 폴더 구조

src

- constants : 상수값을 정의하는 폴더
- routes : API 엔드포인트와 관련된 경로를 정의하는 폴더(controllers와 동일하다고 하지만 분리하기도 한다.)
- controllers : (routes와 분리했을 때) router에서 요청하는 컨트롤러 함수들을 저장하는 폴더
- services : 비즈니스 로직이나 데이터 처리를 담당하는 폴더
- models : 데이터베이스 모델과 관련된 스키마를 정의하는 폴더
- middleware : express 미들웨어를 정의하는 폴더.
