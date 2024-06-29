const propiedadesVenta = [
    {
      img: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      title: "Apartamento de lujo en zona exclusiva",
      description: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      address: "123 Luxury Lane, Prestige Suburb, CA 45678",
      rooms: 4,
      bathrooms: 4,
      price: 5000,
      smoking: false,
      pets: false
    },
    {
      img: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      title: "Apartamento acogedor en la montaña",
      description: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
      address: "789 Mountain Road, Summit Peaks, CA 23456",
      rooms: 2,
      bathrooms: 1,
      price: 1200,
      smoking: true,
      pets: true
    },
    {
      img: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      title: "Penthouse de lujo con terraza panorámica",
      description: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      address: "567 Skyline Avenue, Skyview City, CA 56789",
      rooms: 3,
      bathrooms: 3,
      price: 4500,
      smoking: false,
      pets: true
    },
    {
        img: "https://images.pexels.com/photos/749231/pexels-photo-749231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Tiny house",
        description: "Esta casa pequeña ofrece todas las comodidades que necesitas",
        address: "748 Baltazar, Prestige suburb, CA 32254",
        rooms: 1,
        bathrooms: 1,
        price: 1000,
        smoking: false,
        pets: false
    },
    {
        img: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        title: "Apartamento de lujo en zona exclusiva",
        description: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        address: "123 Luxury Lane, Prestige Suburb, CA 45678",
        rooms: 4,
        bathrooms: 4,
        price: 5000,
        smoking: false,
        pets: false
      },
      {
        img: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        title: "Apartamento acogedor en la montaña",
        description: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        address: "789 Mountain Road, Summit Peaks, CA 23456",
        rooms: 2,
        bathrooms: 1,
        price: 1200,
        smoking: true,
        pets: true
      },
      {
        img: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        title: "Penthouse de lujo con terraza panorámica",
        description: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        address: "567 Skyline Avenue, Skyview City, CA 56789",
        rooms: 3,
        bathrooms: 3,
        price: 4500,
        smoking: false,
        pets: true
      },
      {
          img: "https://images.pexels.com/photos/749231/pexels-photo-749231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "Tiny house",
          description: "Esta casa pequeña ofrece todas las comodidades que necesitas",
          address: "748 Baltazar, Prestige suburb, CA 32254",
          rooms: 1,
          bathrooms: 1,
          price: 1000,
          smoking: false,
          pets: false
      }
  ];
  
let cardVenta = document.querySelector ("#filas");
 let indice = 0;
  for (let venta of propiedadesVenta) {
    let card = `
    <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${venta.img}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${venta.title}
                </h5>
                <p class="card-text">
                  ${venta.description}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 
                  ${venta.address}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.rooms} habitaciones|
                  <i class="fas fa-bath"></i> ${venta.bathrooms} baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.price} </p>`
                if (venta.smoking) {
                  card += `<p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                  </p>`
                } else {
                  card += `<p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>` 
                }
                if (venta.pets) {
                  card += `<p class="text-success">
                    <i class="fas fa-paw"></i> Mascotas permitidas
                  </p>`
                } else {
                  card += `<p class="text-danger">
                    <i class="fa-solid fa-ban"></i> No se permiten mascotas
                  </p>`
                }
                
                card += `</div>
                </div>
            </div> `;
            indice++;
            cardVenta.innerHTML += card;
 }