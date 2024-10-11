backend "s3" {
  bucket = "your-s3-bucket-name"
  key    = "terraform.tfstate"

  # Enable Server-Side Encryption with AWS Key Management Service (KMS)
  kms_key_id = "arn:aws:kms:<region>:<account-id>:alias/alias/terraform-state-key"

  # Optional: Configure Encrypted Transfer (HTTPS)
  encrypt = true
}

# Configure AWS Provider
provider "aws" {
  region = "your-aws-region"
}
