// EmailJS 초기화
(function() {
   emailjs.init("YGBCVXruFUqvvc5WV");
})();

document.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById('contact-form');
   const submitButton = form.querySelector('button[type="submit"]');
   
   // 폼 유효성 검사 함수
   function validateForm() {
       const userName = document.getElementById('user-name').value.trim();
       const userCompany = document.getElementById('user-company').value.trim();
       const userEmail = document.getElementById('user-email').value.trim();
       const userTel = document.getElementById('user-tel').value.trim();
       const message = document.getElementById('message').value.trim();
       const agreeCheckbox = document.getElementById('agree-checkbox');
       
       // 필수 필드 검사
       if (!userName) {
           alert('이름을 입력해주세요.');
           return false;
       }
       if (!userCompany) {
           alert('회사명을 입력해주세요.');
           return false;
       }
       if (!userEmail) {
           alert('이메일을 입력해주세요.');
           return false;
       }
       // 이메일 형식 검사
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(userEmail)) {
           alert('유효한 이메일 주소를 입력해주세요.');
           return false;
       }
       if (!userTel) {
           alert('전화번호를 입력해주세요.');
           return false;
       }
       // 전화번호 형식 검사
       const telRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
       if (!telRegex.test(userTel)) {
           alert('전화번호 형식이 올바르지 않습니다. (예: 010-0000-0000)');
           return false;
       }
       if (!message) {
           alert('문의내용을 입력해주세요.');
           return false;
       }
       if (!agreeCheckbox.checked) {
           alert('개인정보 수집 및 이용에 동의해주세요.');
           return false;
       }
       
       return true;
   }
   
   // 폼 제출 처리
   form.addEventListener('submit', function(event) {
       event.preventDefault();
       
       if (!validateForm()) {
           return;
       }
       
       // 버튼 텍스트 변경
       const originalButtonText = submitButton.textContent;
       submitButton.textContent = '전송중...';
       submitButton.disabled = true;
       
       // EmailJS로 이메일 전송
       const templateParams = {
           from_name: document.getElementById('user-name').value,
           company: document.getElementById('user-company').value,
           reply_to: document.getElementById('user-email').value,
           phone: document.getElementById('user-tel').value,
           message: document.getElementById('message').value
       };
       
       emailjs.send(
           'service_8lviw1k', // EmailJS 서비스 ID로 교체 필요
           'template_lm2999b', // EmailJS 템플릿 ID로 교체 필요
           templateParams
       )
       .then(function() {
           alert('문의사항이 성공적으로 전송되었습니다.');
           form.reset();
       })
       .catch(function(error) {
           alert('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
           console.error('EmailJS 전송 오류:', error);
       })
       .finally(function() {
           // 버튼 상태 복원
           submitButton.textContent = originalButtonText;
           submitButton.disabled = false;
       });
   });
   
   // 전화번호 자동 하이픈 추가
   const telInput = document.getElementById('user-tel');
   telInput.addEventListener('input', function(e) {
       const value = e.target.value.replace(/[^0-9]/g, '');
       let formattedValue = '';
       
       if (value.length <= 3) {
           formattedValue = value;
       } else if (value.length <= 7) {
           formattedValue = value.slice(0, 3) + '-' + value.slice(3);
       } else {
           formattedValue = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
       }
       
       e.target.value = formattedValue;
   });
});