#this file will contain which i named of maneger Sever. your job is manege the creation of file for reading.
# when the user charge the document on your computer  that will contain a function 



import time
while True:
    try:
        for i in range(10):
            nome_arquivo = 'valores'+str(i)+'.txt'
            with open('valores.txt', 'r') as arquivo_existente, open(nome_arquivo, 'w') as novo_arquivo:
                for linha1 in arquivo_existente.readlines():
                    novo_arquivo.write(linha1)
    except IOError:
        print('ERRO AO CRIAR OU ARIR O ARQUIVO PARA ESCRITA')



        
    print('terminei')
    
    #original.close()
    time.sleep(20)
    
