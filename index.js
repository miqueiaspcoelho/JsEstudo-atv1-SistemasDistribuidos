//variaveis
let sockets=[];
let products=["mamão","melância","melão","manga","maracujá"];
let purchase=[];
let purchaseC=[];
let removeList =[];
let a=[];
let b= [];
//let listaAux=[];
let clients =[];

//Objeto cliente
function aboutClient (id,cep,pedido,valor){
  this.id= id;
  this.cep= cep;
  this.pedido= pedido;
  this.valor= valor;
  }

const net = require('net');

//função adiciona itens
const addItem = (str, purchase,products) =>{
  let itens =[];
  purchase = purchase.sort();
  for(cont=0; cont < purchase.length; cont++){
    itens.push(products[purchase[cont]]);
  }
  return itens;
}

//função geral, executa dentro do servidor
const handleConnection = socket => {
  //console.log("Usuário conectado\n");
  sockets.push(socket);
  socket.id=sockets.length;

//Explicando como selecionar um item
  socket.write("Menu\na-Produtos disponíveis\nb-Adicionar ao carrinho\nc-Confirmar Produtos do Carrinho\nd-Valor a pagar\ne-Endereço para entrega\nf-Finalizar Pedido\n\nx-Encerrar");
  socket.on('data',data =>{
    const str = data.toString();
    switch (str) {

      case 'a':
      //printando os produtos disponíveis para o usuário
        socket.write("Produtos disponíveis:\n ");
        for(cont = 0; cont < products.length; cont++){
          socket.write(cont + "-" + products[cont]+" \n");
        }
        break;

      case 'b':
      //Aqui acontece a lógica para adicionar os itens
        socket.write("Adicione os itens - Para finalizar digite: n ")
        socket.on('data', data =>{
          const str = data.toString();
          //aceitando apenas elementos diferentes de: s, n, números maiores que o tanto de produtos e excluindo números repetidos
          if (str!='n' && str!='s' && (parseInt(str))<products.length && purchase.includes(parseInt(str))==false){
              purchase.push(parseInt(str));

          }else if((parseInt(str))>=products.length){
            socket.write("Comando Inválido.");
          }
          //console.log(purchase);

          if (str === 'n'){
            a = addItem(str,purchase,products);
            //console.log(a);
            socket.write("Cliente " + socket.id + " compras: " + a)
            }
        })
        break;


      case 'c':
      //Marcar os produtos que irão ficar no carrinho
        socket.write("Marque os itens que irão permanecer ou que deseja adicionar - Para finalizar digite: p\n");
        socket.on('data',data=>{
          const str = data.toString();

          if (str!='n' && str!='s' && (parseInt(str))<products.length && purchaseC.includes(parseInt(str))==false){
              purchaseC.push(parseInt(str));

          }else if((parseInt(str))>=products.length){
            socket.write("Comando Inválido.");
          }
          //console.log(purchaseC);

          if (str === 'p'){
            b = addItem(str,purchaseC,products);
            //console.log(b);
            socket.write("Cliente " + socket.id + " compras: " + b);
          }
        })
      break;

      case 'd':
      //Mostrando o preço - melhorar ela depois.
        socket.write("Promoção de dia das mães: Todos os produtos por valor unitário");
        socket.write("Valor = R$ " + b.length);
      break;

      case 'e':
      //pegando endereço e montando objeto client
        let address=[];
        socket.write("Informe seu CEP\n ");
        socket.on('data',data =>{
          const str = data.toString();
          clientObject = new aboutClient(socket.id,str,b,b.length);
          clients.push(clientObject);
        })
      break;

      case 'f':
      //finalizando e exibindo o resumo.
        socket.write("Pedido finalizado\nResumo:\n");
        socket.write(JSON.stringify(clientObject));
        socket.write("\nAgradecemos a preferência, volte sempre. \nEquipe Miquéias Coelho serviços: Porque aqui nós construímos sonhos");
        socket.end();
        //console.log(JSON.stringify(clientObject));
      break;

      case 'x':
      socket.write("\nAgradecemos a preferência, volte sempre. \nEquipe Miquéias Coelho serviços: Porque aqui nós construímos sonhos");
      socket.end();
      break;
    }
  })
}

const server = net.createServer(handleConnection);
server.listen(4000,'127.0.0.1');
