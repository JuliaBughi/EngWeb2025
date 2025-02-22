export function genMainPage(data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>Consultas</h1>
                </header>

                <div class="w3-container">
                    <ul class="w3-ul w3-border">
                        <li class="w3-hover-light-blue">
                            <a href="/alunos">Lista de Alunos</a>
                        </li>
                        <li class="w3-hover-light-blue">
                            <a href="/cursos">Lista de Cursos</a>
                        </li>
                        <li class="w3-hover-light-blue">
                            <a href="/instrumentos">Lista de Instrumentos</a>
                        </li>
                    </ul>
                </div>
                
                <footer class="w3-container w3-blue">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genAlunosPage(lalunos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-light-blue">
                    <h1>Lista de Alunos</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                        </tr>`

    lalunos.forEach(a => {
        pagHTML += `
        <tr>
            <td><a href="alunos/${a.id}">${a.id}</a></td>
            <td>${a.nome}</td>
        </tr>
        `
    });

    pagHTML += `  
                    </table>
                </div>

                <button class="w3-button"><a href="/">Voltar</a></button>
                
                <footer class="w3-container w3-light-blue">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genCursosPage(lcursos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-light-blue">
                    <h1>Lista de Cursos</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Designação</th>
                        </tr>`

    lcursos.forEach(c => {
        pagHTML += `
        <tr>
            <td><a href="cursos/${c.id}">${c.id}</a></td>
            <td>${c.designacao}</td>
        </tr>
        `
    });

    pagHTML += `  
                    </table>
                </div>
                
                <button class="w3-button"><a href="/">Voltar</a></button>

                <footer class="w3-container w3-light-blue">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genInstrumentosPage(linstrumentos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-light-blue">
                    <h1>Lista de Instrumentos</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Instrumento</th> 
                        </tr>`

    linstrumentos.forEach(i => {
        pagHTML += `
            <tr>
                <td><a href="instrumentos/${i.id}">${i.id}</a></td>
                <td>${i['#text']}</td>
            </tr>`
    });

    pagHTML += `  
                    </table>
                </div>

                <button class="w3-button"><a href="/">Voltar</a></button>
                
                <footer class="w3-container w3-light-blue">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genAlunoPage(aluno, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-light-blue">
                    <h1>${aluno.nome}</h1>
                </header>

                <div class="w3-container">
                    <p><b>ID:</b> ${aluno.id}</p>
                    <p><b>Nome:</b> ${aluno.nome}</p>
                    <p><b>Data de nascimento:</b> ${aluno.dataNasc}</p>
                    <p><b>Curso:</b> ${aluno.curso}</p>
                    <p><b>Ano do curso:</b> ${aluno.anoCurso}</p>
                    <p><b>Instrumento:</b> ${aluno.instrumento}</p>
                </div>
                
                <button class="w3-button"><a href="/alunos">Voltar</a></button>

                <footer class="w3-container w3-light-blue">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genCursoPage(curso, alunos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-light-blue">
                    <h1>${curso.designacao}</h1>
                </header>

                <div class="w3-container">
                    <p><b>ID:</b> ${curso.id}</p>
                    <p><b>Designação:</b> ${curso.designacao}</p>
                    <p><b>Duração:</b> ${curso.duracao}</p>
                    <p><b>Id do Instrumento:</b> ${curso.instrumento["id"]}</p>
                    <p><b>Designação do Instrumento:</b> ${curso.instrumento["#text"]}</p>
                </div>
                
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Nome do aluno</th>
                            <th>Ano do Curso</th> 
                        </tr>`

alunos.forEach(a =>{
    pagHTML += `
    <tr>
        <td>${a.nome}</td>
        <td>${a.anoCurso}</td>
    </tr>    
    `
})

pagHTML += `     
                    </table>
                </div>    

                <button class="w3-button"><a href="/cursos">Voltar</a></button>

                <footer class="w3-container w3-light-blue">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genInstrumentoPage(instrumento, alunos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-light-blue">
                    <h1>${instrumento["#text"]}</h1>
                </header>

                <div class="w3-container">
                    <p><b>ID:</b> ${instrumento.id}</p>
                    <p><b>Nome do Instrumento:</b> ${instrumento["#text"]}</p>
                </div>
                
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Nome do aluno</th>
                            <th>Curso</th> 
                        </tr>`

alunos.forEach(a =>{
    pagHTML += `
    <tr>
        <td>${a.nome}</td>
        <td>${a.curso}</td>
    </tr>    
    `
})

pagHTML += `     
                    </table>
                </div>    

                <button class="w3-button"><a href="/instrumentos">Voltar</a></button>

                <footer class="w3-container w3-light-blue">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}
