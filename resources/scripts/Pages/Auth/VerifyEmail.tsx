/* eslint-disable max-len */
import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import route from 'ziggy-js';

type TPropsVerifyEmail = {
  status: string;
}

export default function VerifyEmail({ status }: TPropsVerifyEmail) {
  const { post, processing } = useForm();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post(route('verification.send'));
  };

  return (
    <GuestLayout>
      <Head title="Email Verification" />

      <div className="mb-4 text-sm text-gray-600">
        Thanks for signing up! Before getting started, could you verify your email address by clicking on the
        link we just emailed to you? If you didn&apos;t receive the email, we will gladly send you another.
      </div>

      {status === 'verification-link-sent' && (
        <div className="mb-4 font-medium text-sm text-green-600">
          A new verification link has been sent to the email address you provided during registration.
        </div>
      )}

      <form onSubmit={submit}>
        <div className="mt-4 flex items-center justify-between">
          <PrimaryButton processing={processing}>Resend Verification Email</PrimaryButton>

          <Link
            href={route('logout')}
            method="post"
            as="button"
            className="underline text-sm text-gray-600 hover:text-gray-900"
          >
            Log Out
          </Link>
        </div>
      </form>
    </GuestLayout>
  );
}
