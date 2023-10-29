import css from './register.module.css';

export default function Register() {
    return (
        <div className={css.container}>
            <form>
            <h1>Cadastro View</h1>
                <input type="text" placeholder='Nome' />
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Senha' />
                <input type="password" placeholder='Confirmar senha' />
                <div className={css.buttonGroup}>
                    <button>Cadastrar</button>
                    <button>Voltar</button>
                </div>
            </form>
        </div>
    )
}