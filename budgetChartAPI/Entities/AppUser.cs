namespace budgetChartAPI.Entities;

public class AppUser 
{
        public int Id { get; set; }
        public required string Username { get; set; }
        public required string Password { get; set; }
        /// <summary>
        /// Represents the first name of the user
        /// </summary>
        public string? FirstName { get; set; }
        /// <summary>
        /// Represents the last name of the user
        /// </summary>
        public string? LastName { get; set; }
        /// <summary>
        /// Represents the email address of the user
        /// </summary>
        public string? Email { get; set; }
        /// <summary>
        /// Represents the phone number of the user
        /// </summary>
        public string? Phone { get; set; }

    }