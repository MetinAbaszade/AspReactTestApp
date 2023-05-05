﻿namespace AspReactTestApp.DTOs
{
    public class RegisterUserDto
    {
        public string Name { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public IFormFile ProfileImage { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string RetypePassword { get; set; } = string.Empty;
    }
}
