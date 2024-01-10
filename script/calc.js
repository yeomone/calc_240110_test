let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let goals = document.querySelector('#goals')
let result = document.querySelector('#result')
console.log(height,weight,goals,result)

// 체중계 만들기
// 1. 현재 키와 몸무게에 값 입력하고
// 2. 버튼을 클릭하면 적정체중 계산
// 2-1. 현재 키에 맞는 적정체중 출력
// 2-2. 현재 몸무게가 적정 체중을 초과한 값 출력
// 2-3. 적정 체중과 초과 몸무게 팝업으로 출력

// 결과 보기 버튼 클릭 시 적정체중과 초과 몸무게 출력
result.addEventListener('click',function(){
    // 적정체중
    const normal_w = (height.value - 100)*0.9;
    // 초과 몸무게
    const over_w = weight.value - normal_w;
    console.log(normal_w)
    console.log(over_w)
    // 최종 목표에 적정체중 값 출력
    goals.value = normal_w
    // 적정체중과 초과 몸무게 팝업창 출력
    window.alert(`적정 체중은 ${normal_w}kg 이며 ${over_w}kg 초과되셨습니다. `)
})