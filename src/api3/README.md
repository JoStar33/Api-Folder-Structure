## API3
세번째 API 구조방식은 index.ts에 Get, Post, Put과 같은 객체를 만들어두고 객체복사를 통해 전체적으로 사용할 수 있게 하는것이다. 이렇게되면 Get.getProductList()와 같은 형태로 직관적이게, 모든 함수들을 사용이 가능하다.
다만 도메인에 대한 파일을 하나만들때마다 index.ts에 있는 함수객체들에 객체복사를 해줘야한다. 이게 무척 불편할듯;;