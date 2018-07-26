##Ubuntu Server 16.04 LTS (HVM), SSD Volume Type 생성
: aws linux를 쓰려고 했으나, 레드헷 리눅스라 기존 써보았던 우분투랑 조금 달라 일단 빠르게 진행하기 위해 우분투로 설치하였다.

###접속 성공기
: 엄청나게 접속이 안되었는데, 검색해도 이유를 몰랐다. 하지만 네트워크 및 보안에서 보안그룹, 탄력적ip, 네트워크 인페이스를 설정 후 원활히 접속할 수 있었다.

####1. 접속 시작

####2. 접속 후 python3 확인, 미리 설치가 되어 있음, 하지만 pip가 없어서 설치했다.

####3. "sudo apt-get install python-pip" 실행

####4. pip 준비 완료, pip 업데이트 pip install --upgrade

####5. flask restful api를 돌리기 위해 flask, flask_restful, Resource를 설치한다.

####6. 'sudo pip install 위의 3종'

####7. 간략 실행을 위해 vi 에디터로 코드 작성.
####8. restful api server 실행 중 현재 json 형식을 넣으면 반환해 준다. 페이지도 만들예정

####9. node.js 설치 진행

####10. node.js express를 이용해서 웹서버를 만들어준다.

####11. node.js 코딩 중 설치해야하는 것들이 몇가지 있다. 개발서버 콘솔에서 현재 상황을 파악하는데 필요한 morgan
과 json 파일로 보기 좋게 만들어주는 bodyParser이다. 해당 모듈은 npm install로 설치해 주면된다.

####12. 다음은 디비에 대해서 알아보자!
