<template>
	<section class="section">
    <img src="" alt="" id="myimg">
    <button @click="pruebas">save</button>

    <b-field class="file">
        <b-upload v-model="file">
          <a class="button is-primary" @click="upload">
            <b-icon icon="upload"></b-icon>
            <span>{{ file.name || "Click to upload"}}</span>
          </a>
        </b-upload>
      </b-field>
	</section>
</template>

<script>  
import Firebase from 'firebase';
import "firebase/firestore";
import Config from '@/config/config';


export default {
  name: 'prueba',
  data(){
  	return{
  		file: {},
      Firebase,
      img:[]
  	}
  },
  created(){
        let app = Firebase.initializeApp(Config);
        let db = Firebase.storage();
        let storageRef = db.ref();

        /*--------------  Obtener URL de cada imagen de la carpeta 'slides'  --------------*/
        // Create a reference under which you want to list
        var listRef = storageRef.child('slides');

        // Find all the prefixes and items.
        listRef.listAll().then(function(res) {
          res.prefixes.forEach(function(folderRef) {
            console.log('1. ' + folderRef)
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
          });
          res.items.forEach(function(itemRef) {
          
              let storeRef = db.ref(itemRef.fullPath);
              storeRef.getDownloadURL().then(function(url) {
              // `url` is the download URL for 'images/stars.jpg'

              // Or inserted into an <img> element:
              console.log(url);
              var img = document.getElementById('myimg');
              img.src = url;
              }).catch(function(error) {
              // Handle any errors
              });


              // All the items under listRef.
            
          });
        }).catch(function(error) {
          console.log('error: '+ error)
        });

  },
  methods: {
  	pruebas(){
  		let app = Firebase.initializeApp(Config);
      let db = Firebase.storage();

      /*--------------  Obtener URL de cada imagen de la carpeta 'slides'  --------------*/
      // Create a reference under which you want to list
      var listRef = storageRef.child('slides');

      // Find all the prefixes and items.
      listRef.listAll().then(function(res) {
        res.prefixes.forEach(function(folderRef) {
          console.log('1. ' + folderRef)
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach(function(itemRef) {
        
            let storeRef = db.ref(itemRef.fullPath);
            storeRef.getDownloadURL().then(function(url) {
            // `url` is the download URL for 'images/stars.jpg'

            // Or inserted into an <img> element:
            console.log(url);
            // var img = document.getElementById('myimg');
            // img.src = url;
            }).catch(function(error) {
            // Handle any errors
            });


            // All the items under listRef.
          
        });
      }).catch(function(error) {
        console.log('error: '+ error)
      });

  	},
    upload(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>