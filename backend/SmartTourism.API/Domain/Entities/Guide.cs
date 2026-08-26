using System.ComponentModel.DataAnnotations;
using SmartTourism.API.Domain.Entities.Enums;

namespace SmartTourism.API.Domain.Entities
{
    public class Guide
    {
        [Key]
        public int GuideId { get; set; }

        [Required]
        [MaxLength(100)]
        public string FullName { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        [MaxLength(150)]
        public string Email { get; set; } = string.Empty;

        [MaxLength(20)]
        public string PhoneNumber { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Language { get; set; } = string.Empty;

        [MaxLength(200)]
        public string Specialization { get; set; } = string.Empty;

        public decimal HourlyRate { get; set; }

        public GuideStatus Status { get; set; } = GuideStatus.Available;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation properties
        public ICollection<GuideAvailability> Availabilities { get; set; } = new List<GuideAvailability>();
        public ICollection<TourOperation> TourOperations { get; set; } = new List<TourOperation>();
    }
}
