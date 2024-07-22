const HELPERS = {
    validateEmail: (email) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return true;
        } else {
            return false;
        }
    },
    validateCPF: (cpf) => {
        var cpfRegex = /^(?:(\d{3}).(\d{3}).(\d{3})-(\d{2}))$/;
        if (!cpfRegex.test(cpf)) {
            return false;
        }

        var numbers = cpf.match(/\d/g).map(Number);
        var sum = numbers.reduce((acc, cur, idx) => {
            if (idx < 9) {
            return acc + cur * (10 - idx);
            }
            return acc;
        }, 0);

        var rest = (sum * 10) % 11;

        if (rest === 10 || rest === 11) {
            rest = 0;
        }

        if (rest !== numbers[9]) {
            return false;
        }

        sum = numbers.reduce((acc, cur, idx) => {
            if (idx < 10) {
            return acc + cur * (11 - idx);
            }
            return acc;
        }, 0);

        rest = (sum * 10) % 11;

        if (rest === 10 || rest === 11) {
            rest = 0;
        }

        if (rest !== numbers[10]) {
            return false;
        }

        return true;
    },
    cpfMask: (cpfValue) => {
        cpfValue=cpfValue.replace(/\D/g,"")                    
        cpfValue=cpfValue.replace(/(\d{3})(\d)/,"$1.$2")       
        cpfValue=cpfValue.replace(/(\d{3})(\d)/,"$1.$2")       
                                                 
        cpfValue=cpfValue.replace(/(\d{3})(\d{1,2})$/,"$1-$2") 
        return cpfValue;
    },
    cnpjMask: (cnpjValue) => {
        cnpjValue=cnpjValue.replace(/\D/g,"")                          
        cnpjValue=cnpjValue.replace(/^(\d{2})(\d)/,"$1.$2")             
        cnpjValue=cnpjValue.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") 
        cnpjValue=cnpjValue.replace(/\.(\d{3})(\d)/,".$1/$2")           
        cnpjValue=cnpjValue.replace(/(\d{4})(\d)/,"$1-$2")             
        return cnpjValue
    },
    phoneMask: (value) => {
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1-$2")
        return value
    }
}

export default HELPERS;