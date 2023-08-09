function abrirModalM() {
    const modal = document.getElementById ('janela-modal-mar')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) => {
        if(e.target.id =='fechar' || e.target.id == 'janela-modal-mar'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModalF() {
    const modal = document.getElementById ('janela-modal-fin')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) => {
        if(e.target.id =='fechar' || e.target.id == 'janela-modal-fin'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModalE() {
    const modal = document.getElementById ('janela-modal-es')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) => {
        if(e.target.id =='fechar' || e.target.id == 'janela-modal-es'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModalJ() {
    const modal = document.getElementById ('janela-modal-jur')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) => {
        if(e.target.id =='fechar' || e.target.id == 'janela-modal-jur'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModalR() {
    const modal = document.getElementById ('janela-modal-rh')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) => {
        if(e.target.id =='fechar' || e.target.id == 'janela-modal-rh'){
            modal.classList.remove('abrir')
        }
    })
}

function abrirModalG() {
    const modal = document.getElementById ('janela-modal-ges')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) => {
        if(e.target.id =='fechar' || e.target.id == 'janela-modal-ges'){
            modal.classList.remove('abrir')
        }
    })
}