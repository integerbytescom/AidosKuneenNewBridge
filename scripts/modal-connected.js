const modalConnect = document.getElementById('modal-connect');

const onHideModal = () => {
    // console.log(modalConnect.style)
    if (modalConnect.style.display === 'block'){
        modalConnect.style.display = 'none'
    }else {
        modalConnect.style.display = 'block'
    }
}

const onCloseModal = () => {
    modalConnect.style.display = 'none'
}
