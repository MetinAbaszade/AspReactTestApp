﻿using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspReactTestApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
      
        [HttpGet]
        public IEnumerable<string> GetCarDetails()
        {
            return new string[] { "value1", "value2" };
        }


        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}


        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}


        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}


        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}