const cutString = (string) => {
    const words = string.split(" ");
    return words[0].trim();
}

const validWord = (word) => {
    if (word === "") {
        return false;
    }
    if (word.length < 3) {
        return false;
    } else if (word.length > 45) {
        return false;
    }
    return true;
};

const saveWord = (word) => {

}

const createWord = async (word) => {
        const url = import.meta.env.VITE_BASE_URL;
        try {
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(word),
                headers: {
                    'Content-Type': 'application/json'
                } 
            });
            const newWord = await res.json();
            console.log(newWord)
            return newWord;
        } catch (error) {
            console.log(error);
        }
}

export const getNewWord = () => {
    Swal.fire({
        title: 'Add a word 🍇',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Add!',
        showLoaderOnConfirm: true,
        preConfirm:(word) => {
            return createWord(cutString(word)).then((res) => {
                if(!validWord(res)) {
                    Swal.showValidationMessage(
                        `Please enter a valid word`
                    )
                }
            }).catch((error) => {
                Swal.showValidationMessage(
                    `Request failed: ${error}`
                  )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
            console.log(result.value);
            console.log('Exito')
        }
      })
}