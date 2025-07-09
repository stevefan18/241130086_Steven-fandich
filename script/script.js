const divInfo = document.querySelector('.info');
document.querySelectorAll('.produk').forEach(function (barang) {
    barang.querySelector('.tambah').addEventListener('click', function () {
        const jumlahItem = barang.querySelector(".tombol input")
        jumlahItem.value = parseInt(jumlahItem.value) + 1

    });

    barang.querySelector('.kurang').addEventListener('click', function () {
        const jumlahItem = barang.querySelector(".tombol input")
        if (jumlahItem.value > 0) {
            jumlahItem.value = parseInt(jumlahItem.value) - 1
        }
    });
});


const inputNama = document.querySelectorAll('form input')[0];
const inputEmail = document.querySelectorAll('form input')[1];
const inputKode = document.querySelectorAll('form input')[2];
const info = document.querySelector('.info');

document.querySelector('.apply').addEventListener('click', function (e) {
    e.preventDefault()
    info.innerHTML = ""
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (inputNama.value === '' || regex.test(inputEmail.value) === false) {
        alert('Nama dan Email harus diisi');
        return;
    }

    document.querySelectorAll('.barang').forEach(function (barang) {
        const infoItem = document.createElement('div');
        infoItem.className = "flex"
        const paragraph1 = document.createElement('p')
        const data = barang.querySelector(".total").value
        paragraph1.textContent = data

        const paragraph2 = document.createElement('p')
        const data2 = barang.querySelector(".nama").textContent
        paragraph2.textContent = data2

        infoItem.appendChild(paragraph1)
        infoItem.appendChild(paragraph2)

        info.appendChild(infoItem)
    })
    let subTotal = 0
    document.querySelectorAll('.barang').forEach(function (barang) {
        const jumalahBarang = barang.querySelector('.total').value
        const hargaBarang = barang.querySelector('.harga').textContent
        subTotal += parseInt(jumalahBarang * hargaBarang)
    });

    if (inputKode.value === 'DISKON50') {
        subTotal = subTotal - (subTotal * 50 / 100)

    }
    info.innerHTML += `<p>subtotal : $${subTotal}</p>`
});


$('.reset').click(function () {
    $('.total').val('0');
    $('form input').val('');
    $('.info').html('');
});