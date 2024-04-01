
const Common = () => {
  const copyText = document.querySelectorAll(".code");

  copyText.forEach(el => {
    // console.log(el)
    el.addEventListener('click', (e) => {
      // console.log(e.target)
      navigator.clipboard.writeText(e.target.textContent)
    .then(() => {
        alert('복사완료');
    })
    })
  })

}

export default Common;