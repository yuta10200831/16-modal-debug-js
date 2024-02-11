const modal = document.querySelector('.modal');

/*
 * modalの表示非表示処理
 */
const openModalButton = document.querySelector('.openModalButton');
openModalButton.addEventListener('click', (event) => {
  console.log('モーダルボタンがクリックされました。');
  modal.classList.remove('hide');
  modal.classList.add('show');
});

/*
 * 「モーダルを閉じる」をクリックしたときの非表示処理
 */
const closeModalButton = document.querySelector(
  '.closeModalButton'
);
closeModalButton.addEventListener('click', (event) => {
  console.log('モーダルを閉じるボタンがクリックされました。');
  modal.classList.remove('show');
  modal.classList.add('hide');
});

/*
 * modal以外をクリックしたときの示非表示処理
 */
// modal.addEventListener('click', (event) => {
//   if(event.target.closest('.closeModalButton') === null) {
//     modal.classList.remove('show');
//     modal.classList.add('hide');
//     // alert('外側をクリックされました。') ← こちらもやってみるとおもろいです！！
//     alert('外側をクリックされました。');
//   }
// });
