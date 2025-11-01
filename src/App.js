import Card from './components/Card';
import './App.css';

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$72/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$68/hour",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "5 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
    companyName: "Adobe",
    datePosted: "10 weeks ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "1 day ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "Remote, India"
  }
];

console.log(jobOpenings);
  return (
   <div className='parent'>
    {jobOpenings.map(function(elem){
      return <Card Company={elem.companyName} 
                   date={elem.datePosted} 
                   logo={elem.brandLogo} 
                   post={elem.post} 
                   tag1={elem.tag1}
                   tag2={elem.tag2}
                   pay={elem.pay}
                   loc={elem.location}
                   />
    })}   


   </div>
  )} 

export default App;