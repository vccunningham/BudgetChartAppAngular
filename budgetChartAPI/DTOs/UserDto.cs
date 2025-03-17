using System;

namespace budgetChartAPI.DTOs;

public class UserDto
{
    public required string Username { get; set; }
    public required string FirstName { get; set; }
    public required string Token { get; set; }
}
