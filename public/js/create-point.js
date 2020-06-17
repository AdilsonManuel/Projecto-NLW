function populateUFs() {
    const UFSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                UFSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        });
}

populateUFs();

function getCities(evt) {
    const citySelect = document.querySelector('select[name=city]');
    const stateInput = document.querySelector('input[name=state]');

    const ufValue = evt.target.value;

    const indexOfSelectedState = evt.target.selectedIndex;
    stateInput.value = evt.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citySelect.innerHTML = "<option value=>Selecione a Cidade</option>";
    citySelect.disabled = true;
    fetch(url)
        .then(res => res.json())
        .then(cities => {

            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false;
        });
}

document.querySelector("select[name=uf]").
addEventListener("change", getCities);

/**
 * Itens de coleta
 */
const itemToCollect = document.querySelectorAll('.itens-grid li');

for (const item of itemToCollect) {
    item.addEventListener("click", handleSelectedItem);
}
///
const collecteItems = document.querySelector("input[name=items]")

let selectedItems = [];

function handleSelectedItem(evt) {
    //Add or remove class
    const itemLi = evt.target;

    itemLi.classList.toggle("selected");

    const itemID = evt.target.dataset.id;

    //Verify if exist items and which are selected and return true or false
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemID
        return itemFound;
    });
    //if selected, take from selection
    if (alreadySelected >= 0) {
        //Take selection
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemID //false
            return itemIsDifferent;
        });
        selectedItems = filteredItems;
    } else {
        //If not selected, add to selection
        selectedItems.push(itemID);
    }
    collecteItems.value = selectedItems;
    //Update the hidden field with selected items
}