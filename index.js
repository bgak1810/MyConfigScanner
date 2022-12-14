const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
  try   
    {
        const organizationame = 'bgak1810';
        const repositoryname = 'Comments';
		const projectname ="project";
		const personaltoken = "token";

        const urlpath = 'http://configscannerapi.dwpractice.com/api/RepositoryScanner/RepoScan';
				console.log(urlpath);
				const repositoryScanner = {
					clientName: organizationame,//'bgak1810',
					projectPath:repositoryname,//'MyFirstAzureProject',
					technology: projectname,//'Projects',
					uname: 'test',
					pwd_personaltoken: personaltoken,//'m5wd7427yzbhoi4cu57nxo5zbkpqj2kum3vv3moozv625pndweha'
				};
				console.log(repositoryScanner);
				const data=JSON.stringify({
					clientName: organizationame,//'bgak1810',
					projectPath:repositoryname,//'MyFirstAzureProject',
					technology: projectname,//'Projects',
					uname: 'test',
					pwd_personaltoken: personaltoken});
				console.log(data);

                try{
					const Axios = require('axios');
					let axiosConfig = {
						headers: {
							'Content-Type': 'application/json;charset=UTF-8',
							"Access-Control-Allow-Origin": "*",
						}
					  };

					Axios.post(urlpath,data,axiosConfig).then(res=>{
						console.log(JSON.stringify(res.data))
						}).catch(err=>{
							console.log(err)
					});
				}
				catch(err){
						console.log('error here 1',err.message);
				}
				
				
                

    } catch (error) {
        console.log('error here 2',error.message);
    }
}

// Call the main function to run the action
main();