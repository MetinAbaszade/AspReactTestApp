﻿namespace AspReactTestApp.Dto
{
    public class TokenDto
    {
        public TokenDto() { }

        public string AccessToken { get; set; } = string.Empty;
        public string RefreshToken { get; set; } = string.Empty;
        public DateTime TokenExpires { get; set; }
    }
}