namespace budgetChartAPI.Entities;

public class AppUser 
{
        public int Id { get; set; }
        public required string Username { get; set; }
        public required byte[] PasswordHash { get; set; }
        public required byte[] PasswordSalt { get; set; }
        /// <summary>
        /// Represents the first name of the user
        /// </summary>
        public required string FirstName { get; set; }
        /// <summary>
        /// Represents the last name of the user
        /// </summary>
        public required string? LastName { get; set; }
        /// <summary>
        /// Represents the email address of the user
        /// </summary>
        public string? Email { get; set; }
        /// <summary>
        /// Represents the phone number of the user
        /// </summary>
        public string? Phone { get; set; }

    }