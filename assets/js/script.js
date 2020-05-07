$.get('https://api.kawalcorona.com/indonesia', (data) => {
    isiDataIndo(data[0]);
});

const isiDataIndo = data => {
    $('#indonesia .positif').text(data.positif);
    $('#indonesia .meninggal').text(data.meninggal);
    $('#indonesia .sembuh').text(data.sembuh);
};

$.get('https://api.kawalcorona.com/indonesia/provinsi', (data) => {
    isiDataProv(data);
});

const isiDataProv = data => {
    let i = 1;
    data.forEach((dt) => {
        const el = `<tr>
        <th scope="row">${i}</th>
        <td>${dt.attributes.Provinsi.toLocaleString()}</td>
        <td>${dt.attributes.Kasus_Posi.toLocaleString()}</td>
        <td>${dt.attributes.Kasus_Meni.toLocaleString()}</td>
        <td>${dt.attributes.Kasus_Semb.toLocaleString()}</td>
    </tr>`;
        $('#provinsi tbody').append(el);

        i++;
    });
}
$.get('https://api.kawalcorona.com', (data) => {
    isiDataDunia(data);
});

const isiDataDunia = data => {
    let i = 1;
    data.forEach((dt) => {
        const el = `<tr>
        <th scope="row">${i}</th>
        <td>${dt.attributes.Country_Region}</td>
        <td>${dt.attributes.Confirmed.toLocaleString()}</td>
        <td>${dt.attributes.Deaths.toLocaleString()}</td>
        <td>${dt.attributes.Recovered.toLocaleString()}</td>
    </tr>`;
        $('#dunia tbody').append(el);

        i++;
    });
}


$('#select').change((e) => {
    switch (e.target.selectedIndex) {
        case 0:
            tampilTabel('indonesia');
            break;
        case 1:
            tampilTabel('provinsi');
            break;
        case 2:
            tampilTabel('dunia');
            break;
    }
});

const tampilTabel = (category) => {
    $('#indonesia').css('display', 'none');
    $('#provinsi').css('display', 'none');
    $('#dunia').css('display', 'none');

    $(`#${category}`).css('display', '');
};

moment.locale('id');
$('.tgl').text(moment().format('dddd, Do MMMM YYYY'));


const tampilkanQuotes = () => {
    $('.quotes').text(`"${quotes[Math.floor(Math.random() * quotes.length)]}"`);
};
setInterval(tampilkanQuotes, 3000);

const audio = document.getElementById('audio');

let bersuara = false;

$('#suara').click(() => {
    if (!bersuara) {
        audio.play();
        audio.addEventListener('ended', () => {
            audio.play();
        });
        bersuara = true;
        $('#suara').removeClass('fa-volume-up');
        $('#suara').addClass('fa-volume-mute');
    }else{
        audio.pause();
        audio.currentTime = 0;
        bersuara = false;
        $('#suara').removeClass('fa-volume-mute');
        $('#suara').addClass('fa-volume-up');
    }

});