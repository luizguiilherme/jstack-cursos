class ContactController {
  index(require, response) {
  // Listar todos os registros
    response.send('Send From Contact Controller');
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
