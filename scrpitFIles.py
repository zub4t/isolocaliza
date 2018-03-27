import time
while True:
    log = open('C:/xampp/apache/logs/access.log', 'r')
    texto = log.readlines()
    
    for linha  in texto:
        aux = linha.split(' - - ')
        #valores = original.read()
        try:
            nome_arquivo = 'valores'+aux[0]+'.txt'
            #print(nome_arquivo)
            if(aux[0]!='::1'):
                #arquivo = open(nome_arquivo, 'w')
                with open('http://isotechcameras.ddns.net/isolocaliza/valores.txt', 'r') as arquivo_existente, open(nome_arquivo, 'w') as novo_arquivo:
                    for linha1 in arquivo_existente.readlines():
                        novo_arquivo.write(linha1)
        except  IOError:
            print('ERRO AO CRIAR OU ARIR O ARQUIVO PARA ESCRITA')
        if(aux[0]!='::1'):
            #arquivo.close()
            print('')



        
    print('terminei')
    
    #original.close()
    time.sleep(20)
    original = open('C:/xampp/htdocs/adiciona/valores.txt', 'w')
    original.write(' ')
    log.write(' ')
    original.close()
    log.close()
