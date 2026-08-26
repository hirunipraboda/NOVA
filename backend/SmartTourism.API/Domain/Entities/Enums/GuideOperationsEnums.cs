namespace SmartTourism.API.Domain.Entities.Enums
{
    public enum GuideStatus
    {
        Available = 0,
        Busy = 1,
        Inactive = 2
    }

    public enum TourOperationStatus
    {
        Scheduled = 0,
        InProgress = 1,
        Completed = 2,
        Cancelled = 3
    }
}
