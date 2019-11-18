<template>
    <div class="load-screen">
        <p>Select adventure source</p>
        <div class="button-container">
            <button class="import-button" @click="importAdventure">import</button>
            <button class="load-button" @click="notImplemented">load</button>
            <input id="file-upload" type="file" @change="handleUpload"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loadScreen",
        methods: {
            notImplemented() {
                alert("This function is not implemented yet")
            },
            importAdventure(clickEvent) {
                document.querySelector('#file-upload').click()
                clickEvent.preventDefault()
            },
            handleUpload(changeEvent) {
                const uploadedFile = changeEvent.target.files[0]

                // eslint-disable-next-line
                console.log(uploadedFile)

                uploadedFile.text()
                    .then(adventureJson => {
                        const uploadedAdventure = JSON.parse(adventureJson)
                        // TODO:    check if uploaded adventure complies with the scheme of an adventure object
                        //          (no clue how to do that but this is neccessary in order to avoid uploading something that is not an adventure)

                        this.$store.commit('setAdventureObject', uploadedAdventure)
                    })
            }
        }
    }
</script>

<style scoped>
    .load-screen {
        padding: 2em;
        background-image: radial-gradient(#fff,#d8d8d8);
        border-radius: 1.2em;

        font-family: var(--font);
    }

    .button-container {

    }

    .import-button {
        outline-style: none;
        border-radius: 0.4em 0.4em 0.4em 0.4em;
        border: 2px solid #d9d9d9;
        background-color: #f2f2f2;
        font-size: 1.3em;
        cursor: pointer;
    }

    .load-button {
        float: right;

        outline-style: none;
        border-radius: 0.4em 0.4em 0.4em 0.4em;
        border: 2px solid #d9d9d9;
        background-color: #f2f2f2;
        font-size: 1.3em;
        cursor: pointer;
    }

    .load-button:hover {
        border-color: #6c9dc6;
    }

    .import-button:hover {
        border-color: #6c9dc6;
    }

    #file-upload {
        display: none;
    }
</style>