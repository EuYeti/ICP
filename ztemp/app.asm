section .data
    ; Define a string com uma quebra de linha (0xA ou \n)
    msg db "Hello, World!", 0xA
    ; Calcula o tamanho da mensagem subtraindo a posição atual pela inicial da string
    msg_len equ $ - msg

section .text
    global _start

_start:
    ; 1. Chamada de sistema para escrever (sys_write)
    mov rax, 1          ; Código 1 ativa o sys_write
    mov rdi, 1          ; File descriptor 1 define a saída padrão (stdout)
    mov rsi, msg        ; Move o ponteiro da nossa mensagem
    mov rdx, msg_len    ; Informa o tamanho da string
    syscall             ; Executa a chamada no Kernel

    ; 2. Chamada de sistema para sair (sys_exit)
    mov rax, 60         ; Código 60 ativa o sys_exit
    xor rdi, rdi        ; Retorna o código de erro 0 (sucesso)
    syscall             ; Executa a chamada no Kernel
