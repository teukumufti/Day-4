// let namaSiswa = ['apis', 'kamila', 'indah', 'lala']
// console.log(namaSiswa)

// let tambahData = namaSiswa.push('sem', 'dila') //menambah data
// console.log('tambah namaSiswa :',namaSiswa)

// let reverseData = namaSiswa.reverse() // reverse data
// console.log('reverse data :', reverseData)

// let sortData = namaSiswa.sort() // mengurutkan data
// console.log('sort data :', sortData)

// const numbers = [30, 40, 70]
// function dataNumbers(total, numb) {             //reduce data
//     return total + numb
// }
// let result = numbers.reduce(dataNumbers)
// console.log(result)

//add blog
// let dataSiswa = []
// console.log(dataSiswa)

// function tambahSiswa () {
//     let name = document.getElementById('input-name').value
//     let content = document.getElementById('input-email').value
// image = URL.createObjectURL(image[0]) //untuk mengambil gambar

//     let siswa = {
//         name: name,
//         content: content,
//     }
//     dataSiswa.push(siswa)
//     console.log(dataSiswa)
// }

// --------------------------------------------------------------------------------------------------
let projects = [];

function addProject(event) {
  event.preventDefault(event);

  let name = document.getElementById("input-nameProject").value;
  let startDate = document.getElementById("input-startDate").value;
  let endDate = document.getElementById("input-endDate").value;
  //   let technologies = document.getElementById("technology").innerHTML;
  let description = document.getElementById("input-description").value;
  let uploadImage = document.getElementById("input-image").files;

  uploadImage = URL.createObjectURL(uploadImage[0]);

  let project = {
    name: name,
    startDate: startDate,
    endDate: endDate,
    // technologies: technologies,
    description: description,
    uploadImage: uploadImage,
    postAt: new Date(),
    author: "Teuku Mufti",
  };
  projects.push(project);
  console.log(projects);

  renderProject();
}

function renderProject() {
  document.getElementById("box-projects").innerHTML = "";
  for (let dataProject = 0; dataProject < projects.length; dataProject++) {
    document.getElementById("box-projects").innerHTML += `
    <div style="width: 265px; margin-left: 40px">
    <div style="margin-top: 30%">
      <div class="blog-detail">
        <div>
          <img
            src="${projects[dataProject].uploadImage}"
            class="style-imageBlogDetail"
            alt="image"
          />
        </div>
        <div>
          <div>
            <h3>${projects[dataProject].name}</h3>
            <p style="color: grey; margin-bottom: 10px">${projects[dataProject].startDate}</p>
          </div>
          <div>
            <p>
              ${projects[dataProject].description}
            </p>
          </div>
        </div>
        <div class="style-icons">
          <div>
            <img
              src="/NavbarandLayouting/myProjeect/assetProject/node.svg"
              alt="nodeJs"
            />
          </div>
          <div>
            <img
              src="/NavbarandLayouting/myProjeect/assetProject/javascript.svg"
              alt="javascript"
            />
          </div>
          <div>
            <img
              src="/NavbarandLayouting/myProjeect/assetProject/rect.svg"
              alt="nodeJs"
            />
          </div>
          <div>
            <img
              src="/NavbarandLayouting/myProjeect/assetProject/vuejs.svg"
              alt="nodeJs"
            />
          </div>
        </div>
        <div class="style-buttonBlogDetails">
          <div>
            <button class="style-buttonEdit">edit</button>
          </div>
          <div>
            <button class="style-buttonDelete">delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
      `;
  }
}
