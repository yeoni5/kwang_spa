// 컴포넌트 정의
const Home = {
    template: '<div>Home</div>'
}

const About = {
    template: '<div>About</div>'
}

// 라우팅 매핑
const routes = {
    '/home': Home,
    '/about': About
}

// URL 변경 감지 및 컴포넌트 표시 함수
function route() {
    // 현재 URL 경로 가져오기
    const path = window.location.pathname

    // 라우트 매핑에서 해당 경로에 대한 컴포넌트 가져오기
    const component = routes[path]

    // 컴포넌트를 표시할 영역에 적용
    document.getElementById('app').innerHTML = component.template
}

// 초기 라우팅 수행
route()

// 브라우저의 History API를 사용하여 URL 변경 시 라우팅 수행
window.onpopstate = route