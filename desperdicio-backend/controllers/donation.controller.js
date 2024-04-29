module.exports = function (app) {

const service = require('../services/donation.service')

//https://projeto-integrador02-backend-cst3js8t6-jonatasfelipes-projects.vercel.app/api/donations/
app.get('/', async (req, res) => {
    const donations = await service.getAllDonations()
    res.send(donations)

    // #swagger.tags = ['Retorna todas as doações']
    // #swagger.description = 'Endpoint para obter todas as doações.'
})

app.get('/ajude', async (req, res) => {
    const donations = await service.getAllDonationsHelp()
    res.send(donations)

    // #swagger.tags = ['Retorna os pedidos de doações']
    // #swagger.description = 'Endpoint para obter todas os pedidos de doações.'
})

app.get('/:id', async (req, res) => {
    const donation = await service.getDonationById(req.params.id)
    if (donation == undefined)
        res.status(404).json('Sem dados para esse ID : ' + req.params.id)
    else
        res.send(donation)
    
        // #swagger.tags = ['Retorna uma doação específica']
        // #swagger.description = 'Endpoint para obter uma doação específica.'
        // #swagger.parameters['id'] = { description: 'ID da doação.' }
})

app.delete('/:id', async (req, res) => {
    const affectedRows = await service.deleteDonation(req.params.id)
    if (affectedRows == 0)
        res.status(404).json('Sem dados para esse ID : ' + req.params.id)
    else
        res.send('deletado com sucesso.')

        // #swagger.tags = ['Deleta uma doação específica']
        // #swagger.description = 'Endpoint para deletar uma doação específica.'
        // #swagger.parameters['id'] = { description: 'ID da doação.' }
})

app.post('/', async (req, res) => {
    const affectedRows = await service.createDonation(req.body)
    res.status(201).send('Enviado com sucesso.')

    // #swagger.tags = ['Cadastra uma doação ou um pedido de doação']
    // #swagger.description = 'Endpoint para cadastrar uma doação ou um pedido de ajuda .'
    // #swagger.parameters['name'] = { description: 'Nome.' }
    // #swagger.parameters['email'] = { description: 'Email.' }
    // #swagger.parameters['tiporequisicao'] = { description: 'doando / precisando.' }
    // #swagger.parameters['message'] = { description: 'Conteudo da doação ou da solicitação de ajuda!' }
})

app.put('/:id', async (req, res) => {
    const affectedRows = await service.updateDonation(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('Não existe essa doação para atualiza-la : ' + req.params.id)
    else
        res.send('Atualizada com sucesso.')

        // #swagger.tags = ['Atualiza uma doação específica']
        // #swagger.description = 'Endpoint para atualizar uma doação específica.'
        // #swagger.parameters['id'] = { description: 'ID da doação.' }
        // #swagger.parameters['name'] = { description: 'Nome.' }
        // #swagger.parameters['email'] = { description: 'Email.' }
        // #swagger.parameters['tiporequisicao'] = { description: 'doando / precisando.' }
        // #swagger.parameters['message'] = { description: 'Conteudo da doação ou da solicitação de ajuda!' }
})

}