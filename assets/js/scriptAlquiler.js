const propiedadesAlquiler = [
    {
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      title: "Apartamento en el centro de la ciudad",
      description: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      address: "123 Main Street, Anytown, CA 91234",
      rooms: 2,
      bathrooms: 2,
      price: 2000,
      smoking: false,
      pets: true
    },
    {
      img: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Apartamento luminoso con vista al mar",
      description: "Este hermoso apartamento ofrece una vista impresionante al mar",
      address: "456 Ocean Avenue, Seaside Town, CA 56789",
      rooms: 3,
      bathrooms: 3,
      price: 2500,
      smoking: true,
      pets: true
    },
    {
      img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      title: "Condominio moderno en zona residencial",
      description: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      address: "123 Main Street, Anytown, CA 91234",
      rooms: 2,
      bathrooms: 2,
      price: 2200,
      smoking: false,
      pets: false
    },
    {
        img: "https://images.pexels.com/photos/749231/pexels-photo-749231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Tiny house",
        description: "Esta casa pequeña ofrece todas las comodidades que necesitas",
        address: "748 Baltazar, Prestige suburb, CA 32254",
        rooms: 1,
        bathrooms: 1,
        price: 500,
        smoking: false,
        pets: false
      },
      {
        img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        title: "Apartamento en el centro de la ciudad",
        description: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        address: "123 Main Street, Anytown, CA 91234",
        rooms: 2,
        bathrooms: 2,
        price: 2000,
        smoking: false,
        pets: true
      },
      {
        img: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        title: "Apartamento luminoso con vista al mar",
        description: "Este hermoso apartamento ofrece una vista impresionante al mar",
        address: "456 Ocean Avenue, Seaside Town, CA 56789",
        rooms: 3,
        bathrooms: 3,
        price: 2500,
        smoking: true,
        pets: true
      },
      {
        img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        title: "Condominio moderno en zona residencial",
        description: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        address: "123 Main Street, Anytown, CA 91234",
        rooms: 2,
        bathrooms: 2,
        price: 2200,
        smoking: false,
        pets: false
      },
      {
          img: "https://images.pexels.com/photos/749231/pexels-photo-749231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "Tiny house",
          description: "Esta casa pequeña ofrece todas las comodidades que necesitas",
          address: "748 Baltazar, Prestige suburb, CA 32254",
          rooms: 1,
          bathrooms: 1,
          price: 500,
          smoking: false,
          pets: false
        }
  ];

  let cardAlquiler = document.querySelector ("#filas2");
  let indice2 = 0;
   for (let alquiler of propiedadesAlquiler) {
     let card2 = `
     <div class="col-md-4 mb-4">
             <div class="card">
               <img
                 src="${alquiler.img}"
                 class="card-img-top"
                 alt="Imagen del departamento"
               />
               <div class="card-body">
                 <h5 class="card-title">
                   ${alquiler.title}
                 </h5>
                 <p class="card-text">
                   ${alquiler.description}
                 </p>
                 <p>
                   <i class="fas fa-map-marker-alt"></i> 
                   ${alquiler.address}
                 </p>
                 <p>
                   <i class="fas fa-bed"></i> ${alquiler.rooms} habitaciones|
                   <i class="fas fa-bath"></i> ${alquiler.bathrooms} baños
                 </p>
                 <p><i class="fas fa-dollar-sign"></i> ${alquiler.price} </p>`
                 if (alquiler.smoking) {
                   card2 += `<p class="text-success">
                     <i class="fas fa-smoking"></i> Permitido fumar
                   </p>`
                 } else {
                   card2 += `<p class="text-danger">
                   <i class="fas fa-smoking-ban"></i> No se permite fumar
                 </p>` 
                 }
                 if (alquiler.pets) {
                   card2 += `<p class="text-success">
                     <i class="fas fa-paw"></i> Mascotas permitidas
                   </p>`
                 } else {
                   card2 += `<p class="text-danger">
                     <i class="fa-solid fa-ban"></i> No se permiten mascotas
                   </p>`
                 }
                 
                 card2 += `</div>
                 </div>
             </div> `;
             indice2++;
             cardAlquiler.innerHTML += card2;
  }