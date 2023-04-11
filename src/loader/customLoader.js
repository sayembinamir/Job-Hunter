import { getJobCart } from "../utilities/fakedb";

export const jobData = async () =>{
    const data = await fetch('/jobs.json');
    const details = await data.json();
    const applyData = getJobCart();
    let jobsInfo = [];
    for(const id in applyData){
        const exists = details.find(detail => detail.id === id);
        if(exists){
            jobsInfo.push(exists);
        }
    }
    return {details, jobsInfo};
}